Add-Type -AssemblyName System.Drawing
Add-Type -ReferencedAssemblies System.Drawing -TypeDefinition @'
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Drawing.Text;
using System.IO;

public static class PortfolioAssets {
    static readonly Color Bg = Color.FromArgb(240, 244, 243);
    static readonly Color Ink = Color.FromArgb(32, 42, 50);
    static readonly Color Green = Color.FromArgb(23, 107, 91);
    static readonly Color Muted = Color.FromArgb(94, 105, 116);

    static Color Mix(Color a, Color b, double t) {
        return Color.FromArgb((int)(a.R + (b.R-a.R)*t), (int)(a.G + (b.G-a.G)*t), (int)(a.B + (b.B-a.B)*t));
    }
    static Bitmap Recolor(string file, bool dark) {
        using (var source = new Bitmap(file)) {
            var result = new Bitmap(source.Width, source.Height);
            for (int y=0; y<source.Height; y++) for (int x=0; x<source.Width; x++) {
                Color c = source.GetPixel(x,y);
                double max = Math.Max(c.R, Math.Max(c.G,c.B));
                double min = Math.Min(c.R, Math.Min(c.G,c.B));
                bool colored = max-min > 20;
                double t = dark ? Math.Max(0, Math.Min(1,(max-28)/227)) : 1-min/255;
                result.SetPixel(x,y,Mix(Bg, colored ? Green : Ink, t*c.A/255));
            }
            return result;
        }
    }
    static void Text(Graphics g, string text, float size, FontStyle style, Color color, float x, float y) {
        using (var font = new Font("Segoe UI",size,style,GraphicsUnit.Pixel))
        using (var brush = new SolidBrush(color)) g.DrawString(text,font,brush,x,y);
    }
    static Graphics Canvas(Bitmap bitmap) {
        var g = Graphics.FromImage(bitmap);
        g.SmoothingMode = SmoothingMode.AntiAlias;
        g.InterpolationMode = InterpolationMode.HighQualityBicubic;
        g.TextRenderingHint = TextRenderingHint.AntiAliasGridFit;
        g.Clear(Bg);
        return g;
    }
    static void Mark(Graphics g, float x, float y, float size) {
        var state = g.Save();
        g.TranslateTransform(x,y);
        g.ScaleTransform(size/64,size/64);
        using (var brush = new SolidBrush(Color.FromArgb(234,242,239)))
        using (var tile = new GraphicsPath()) {
            tile.AddArc(0,0,32,32,180,90);
            tile.AddArc(32,0,32,32,270,90);
            tile.AddArc(32,32,32,32,0,90);
            tile.AddArc(0,32,32,32,90,90);
            tile.CloseFigure();
            g.FillPath(brush,tile);
        }
        using (var brush = new SolidBrush(Color.FromArgb(67,143,126)))
            g.FillPolygon(brush,new PointF[]{new PointF(12,21),new PointF(36,7),new PointF(52,16),new PointF(28,30)});
        using (var brush = new SolidBrush(Color.FromArgb(16,83,69)))
            g.FillPolygon(brush,new PointF[]{new PointF(12,21),new PointF(28,30),new PointF(52,44),new PointF(36,53)});
        using (var brush = new SolidBrush(Green))
            g.FillPolygon(brush,new PointF[]{new PointF(36,53),new PointF(52,44),new PointF(28,58),new PointF(12,49)});
        g.Restore(state);
    }
    public static void Generate(string root) {
        foreach (int size in new int[]{64,180}) {
            using (var icon=new Bitmap(size,size)) using (var g=Canvas(icon)) {
                Mark(g,0,0,size);
                icon.Save(Path.Combine(root,size==64?"favicon-64.png":"apple-touch-icon.png"),ImageFormat.Png);
            }
        }
        using (var cover = Recolor(Path.Combine(root,"web","when-to-wander.png"),true))
            cover.Save(Path.Combine(root,"web","when-to-wander-cover.png"),ImageFormat.Png);
        using (var social=new Bitmap(1200,630)) using (var g=Canvas(social)) {
            Mark(g,82,80,80);
            Text(g,"MUBARAK ALI",20,FontStyle.Bold,Green,184,100);
            Text(g,"Building cinematic",66,FontStyle.Bold,Ink,76,228);
            Text(g,"digital experiences.",66,FontStyle.Bold,Green,76,312);
            Text(g,"Frontend & Full Stack Developer  |  3D Artist",25,FontStyle.Regular,Muted,80,428);
            Text(g,"mubarak-ali-portfolio.vercel.app",20,FontStyle.Regular,Muted,80,537);
            social.Save(Path.Combine(root,"social-preview.png"),ImageFormat.Png);
        }
    }
}
'@

$public = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..\public'))
[PortfolioAssets]::Generate($public)
Write-Output 'Generated matching project artwork, folded-ribbon icons, and social preview.'

namespace Portfolio.Shared.Models;

public class Character
{
    public string Width { get; set; }
    public string Height { get; set; }
    public string ViewBox { get; set; }
    public string Margin { get; set; }

    public Character()
    {
        Width = "25rem";
        Height = "25rem";
        ViewBox = "0 0 100 100";
        Margin = "0 0 0 0";
    }

    public Character(string width, string height, string viewBox, string margin)
    {
        Width = width;
        Height = height;
        ViewBox = viewBox;
        Margin = margin;
    }
}

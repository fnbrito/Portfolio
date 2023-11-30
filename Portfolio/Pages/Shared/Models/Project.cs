namespace Portfolio.Shared.Models;

public class Project
{
    public string Name { get; set; }
    public string Description { get; set; }
    public string LongDescription { get; set; }
    public string ImageUrl { get; set; }
    public string ImageDescription { get; set; }
    public string Url { get; set; }
    public string Source { get; set; }
    public string SourceUrl { get; set; }
    public string[] Technologies { get; set; }

    public Project()
    {
        Name = string.Empty;
        Description = string.Empty;
        LongDescription = string.Empty;
        ImageUrl = string.Empty;
        ImageDescription = string.Empty;
        Url = string.Empty;
        Source = string.Empty;
        SourceUrl = string.Empty;
        Technologies = Array.Empty<string>();
    }

    public Project(string name, string description, string longDescription, string image, string url, string imageUrl, string imageDescription, string source, string sourceUrl, string[] technologies)
    {
        Name = name;
        Description = description;
        LongDescription = longDescription;
        ImageUrl = imageUrl;
        ImageDescription = imageDescription;
        Url = url;
        Source = source;
        SourceUrl = sourceUrl;
        Technologies = technologies;
    }
}

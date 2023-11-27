namespace Portfolio.Shared.Models;

public class Experience
{
  public string Title { get; set; }
  public string Place { get; set; }
  public string[] Tags { get; set; }
  public string Location { get; set; }
  public string Url { get; set; }
  public string ImageUrl { get; set; }
  public string ImageDescription { get; set; }
  public DateTime StartDate { get; set; }
  public DateTime EndDate { get; set; }
  public string Description { get; set; }
  public string[] BulletPoints { get; set; }

  public Experience()
  {
    Title = string.Empty;
    Place = string.Empty;
    Tags = Array.Empty<string>();
    Location = string.Empty;
    Url = string.Empty;
    ImageUrl = string.Empty;
    ImageDescription = string.Empty;
    StartDate = DateTime.MinValue;
    EndDate = DateTime.MinValue;
    Description = string.Empty;
    BulletPoints = Array.Empty<string>();
  }

  public Experience(string title, string place, string[] tags, string location, string url, string imageUrl, string imageDescription, DateTime startDate, DateTime endDate, string description, string[] bulletPoints)
  {
    Title = title;
    Place = place;
    Tags = tags;
    Location = location;
    Url = url;
    ImageUrl = imageUrl;
    ImageDescription = imageDescription;
    StartDate = startDate;
    EndDate = endDate;
    Description = description;
    BulletPoints = bulletPoints;
  }
}

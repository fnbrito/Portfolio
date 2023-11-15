namespace Portfolio.Shared.Models;

public class Experience
{
  public string? Title { get; set; }
  public string? Place { get; set; }
  public string[] Tags { get; set; }
  public string Location { get; set; }
  public string Url { get; set; }
  public string ImageUrl { get; set; }
  public string ImageDescription { get; set; }
  // public string StartDate { get; set; }
  // public string EndDate { get; set; }
  public string Description { get; set; }
  public string[] BulletPoints { get; set; }
}

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Portfolio.Shared.Models;


namespace Portfolio.Pages
{
    public class ProjectsModel : PageModel
    {
        public List<Project> Projects { get; set; } = new List<Project>();

        public ProjectsModel()
        {
            Projects.Add(new Project(){
                Name = "Portfolio",
                Description = "A portfolio to showcase my projects and experience.",
                LongDescription = "The project was made using ASP.NET Core Razor Pages and TailwindCSS. The design of the webpage was done in Figma and the graphics in Adobe Illustrator.",
                Technologies = new string[] {
                    "dotnet", "c#", "razor", "html", "css", "javascript", "tailwindcss"
                    },
                Url = "https://filipebrito.me/",
                Source = "Github",
                SourceUrl = "https://github.com/fnbrito/Portfolio",
                ImageUrl = "Portfolio.png",
                ImageDescription = "Portfolio",
            });
        }

        public void OnGet()
        {
        }
    }
}

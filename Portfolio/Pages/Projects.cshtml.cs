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
                Description = "This website! A portfolio to showcase my projects and experience.",
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

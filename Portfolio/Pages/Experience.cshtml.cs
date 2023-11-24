using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Portfolio.Shared.Models;

namespace Portfolio.Pages;


public class ExperienceModel : PageModel
{
    public List<Experience> Jobs { get; set; } = new List<Experience>();
    public List<Experience> Education { get; set; } = new List<Experience>();

    public ExperienceModel()
    {
        Jobs.Add(new Experience{
            Place = "Brock Solutions",
            Title = "Software Developer (Co-op)",
            StartDate = new DateTime(2021, 1, 1),
            EndDate = new DateTime(2021, 8, 30),
            Description = "Started as DevOps CI/CD deploying solutions on-premises and remotely, moved to an agile development team working on a high-scale cloud-based SaaS product.",
            Tags = new string[] {
                "c#", "mssql", "dotnet"
                },
            Location = "Kitchener, ON",
            Url = "https://brocksolutions.com/",
            ImageUrl = "BrockSolutions.png",
            ImageDescription = "Airplane",
            BulletPoints = new string[] {
                "Developed, debugged, and improved several C# and Microsoft SQL Server applications.",
                "Detected and solved issues in internal tools, reducing the back-and-forth between departments",
                "Deployed a baggage handling 3D map solution, integrating OPC PLC sensors and conveyor belts to show location of bags in real-time in a browser.",
                "Learned technology on-the-go to adapt to a multi-tech environment.",
                "Acquired great amount of external knowledge necessary to properly solve problems and collaborate with team.",
            }
        });
        Jobs.Add(new Experience{
            Place = "Dare Foods",
            Title = "Business Developer (Co-op)",
            StartDate = new DateTime(2021, 5, 1),
            EndDate = new DateTime(2021, 12, 31),
            Description = "Developing PowerShell and Python scripts to enable and upgrade business processes. Collaborated with cross-functional teams, integrating APIs, working with legacy code; understanding, renewing, and improving them.",
            Tags = new string[] {
                "powershell", "restapis", "erp"
                },
            Location = "Cambridge, ON",
            Url = "https://darefoods.com/",
            ImageUrl = "DareFoods.png",
            ImageDescription = "Cookie",
            BulletPoints = new string[] {
                "Integrated ERP systems with incoming SOAP data from REST APIs. Handling sensitive information working closely with HR to ensure requirements are law-abiding.",
                "Managed the creation and administration of the company's SharePoint Online intranet, managing file metadata, user permissions, page creation and customization and plugin usage.",
                "Created an app to gather donations for the company fundraising. Originally done in pen and paper, the new process was working in a Microsoft Power Apps app, increasing donations compared to previous years.",
                "Applied data analytics and statistical analysis in internal projects. Automated and improved user creation scripts.",
            },
        });

        Education.Add(new Experience{
            Place = "Conestoga College",
            Title = "Software Engineering Technology",
            StartDate = new DateTime(2020, 1, 1),
            EndDate = new DateTime(2023, 4, 29),
            Description = "Software Engineering Technology program at Conestoga offers a comprehensive, hands-on curriculum covering diverse technologies, from web development to cybersecurity.",
            Tags = new string[] {
                "gpa-3.5", "capstone-awarded"
                },
            Location = "Waterloo, ON",
            Url = "https://www.conestogac.on.ca/fulltime/software-engineering-technology",
            ImageUrl = "Conestoga.png",
            ImageDescription = "Graduating cap",
            BulletPoints = new string[] {
                "C# as a core programming language, with foundations in C and C++.",
                "Web frameworks and technologies.",
                "Data structures and databases.",
                "UX/UI and mobile application development.",
                "Business intellingent and software analysis.",
            },
        });
    }
    public void OnGet()
    {


    }
}

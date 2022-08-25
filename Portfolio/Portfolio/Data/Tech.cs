using System.ComponentModel;

namespace Portfolio.Data {
    public enum Tech {
        Unknown,
        [Description("WPF")] Wpf,
        [Description("ASP.NET")] AspNet,
        [Description("C#")] Csharp,
        Blazor,
        Bootstrap,
        [Description("CSS")] Css3,
        [Description(".NET")] DotNet,
        Git,
        [Description("HTML")] Html5,
        Python,
        [Description("REST API")] RestApi,
        Rider,
        [Description("Unit Tests")] UnitTests,
        [Description("Visual Studio")] VisualStudio,
        [Description("Visual Studio Code")] VisualStudioCode,
        TkInter,
        Vue,
        [Description("Java Script")] Js,
        [Description("Type Script")] Ts,
        Docker,
        Sass,
    }
}
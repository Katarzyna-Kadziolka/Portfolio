using System;
using Portfolio.Data;

namespace Portfolio.Services {
    public static class TechService {
        public static string GetName(this Tech tech) {
            switch (tech) {
                case Tech.Wpf:
                    return "WPF";
                case Tech.AspNet:
                    return "ASP.NET";
                case Tech.Csharp:
                    return "C#";
                case Tech.Blazor:
                    return "Blazor";
                case Tech.Bootstrap:
                    return "Bootstrap";
                case Tech.Css3:
                    return "CSS";
                case Tech.DotNet:
                    return ".NET";
                case Tech.Git:
                    return "Git";
                case Tech.Html5:
                    return "HTML";
                case Tech.Python:
                    return "Python";
                case Tech.RestApi:
                    return "Rest Api";
                case Tech.Rider:
                    return "Rider";
                case Tech.UnitTests:
                    return "Unit Tests";
                case Tech.VisualStudio:
                    return "Visual Studio";
                case Tech.VisualStudioCode:
                    return "Visual Studio Code";
                case Tech.TkInter:
                    return "TkInter";
                case Tech.Vue:
                    return "Vue";
                case Tech.Js:
                    return "Java Script";
                case Tech.Ts:
                    return "Type Script";
                case Tech.Sass:
                    return "Sass";
                case Tech.Docker:
                    return "Docker";
                case Tech.Angular:
                    return "Angular";
                case Tech.Quasar:
                    return "Quasar";
                case Tech.Flutter:
                    return "Flutter";
                case Tech.Dart:
                    return "Dart";
                case Tech.AndroidStudio:
                    return "Android Studio";
                default:
                    throw new ArgumentOutOfRangeException(nameof(tech), tech, null);
            }
        }

        public static string GetImageAddress(this Tech tech) {
            switch (tech) {
                case Tech.Wpf:
                    return "Images/Technologies/wpf.svg";
                case Tech.AspNet:
                    return "Images/Technologies/asp.net.svg";
                case Tech.Csharp:
                    return "Images/Technologies/csharp.svg";
                case Tech.Blazor:
                    return "Images/Technologies/blazor.svg";
                case Tech.Bootstrap:
                    return "Images/Technologies/bootstrap.svg";
                case Tech.Css3:
                    return "Images/Technologies/css3.svg";
                case Tech.DotNet:
                    return "Images/Technologies/dot-net.svg";
                case Tech.Git:
                    return "Images/Technologies/git.svg";
                case Tech.Html5:
                    return "Images/Technologies/html5.svg";
                case Tech.Python:
                    return "Images/Technologies/python.svg";
                case Tech.RestApi:
                    return "Images/Technologies/rest-api.svg";
                case Tech.Rider:
                    return "Images/Technologies/rider.svg";
                case Tech.UnitTests:
                    return "Images/Technologies/unit-tests.svg";
                case Tech.VisualStudio:
                    return "Images/Technologies/visualstudio.svg";
                case Tech.VisualStudioCode:
                    return "Images/Technologies/visualstudiocode.svg";
                case Tech.TkInter:
                    return "Images/Technologies/wpf.svg";
                case Tech.Vue:
                    return "Images/Technologies/vue.svg";
                case Tech.Js:
                    return "Images/Technologies/javascript.svg";
                case Tech.Ts:
                    return "Images/Technologies/typescript.svg";
                case Tech.Docker:
                    return "Images/Technologies/docker.svg";
                case Tech.Sass:
                    return "Images/Technologies/sass.svg";
                case Tech.Angular:
                    return "Images/Technologies/angular.svg";
                case Tech.Dart:
                    return "Images/Technologies/dart.svg";
                case Tech.Flutter:
                    return "Images/Technologies/flutter.svg";
                case Tech.Quasar:
                    return "Images/Technologies/quasar.svg";
                case Tech.AndroidStudio:
                    return "Images/Technologies/android.svg";
                case Tech.Unknown:
                    throw new ArgumentOutOfRangeException(nameof(tech), tech, null);
                default:
                    throw new ArgumentOutOfRangeException(nameof(tech), tech, null);
            }
        }
    }
}

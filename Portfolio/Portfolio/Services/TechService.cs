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
                default:
                    throw new ArgumentOutOfRangeException(nameof(tech), tech, null);
            }
        }
    }
}

using System.Web.Optimization;

namespace EvaluacionDocenteSys.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {


            bundles.Add(new StyleBundle("~/bundles/css")
                .Include(
                "~/Content/html/assets/plugins/bootstrap/css/bootstrap.min.css",
                "~/Content/html/assets/plugins/jvectormap/jquery-jvectormap-2.0.3.min.css",
                "~/Content/html/assets/plugins/morrisjs/morris.min.css",
                "~/Content/html/assets/css/main.css",
                "~/Content/html/assets/css/color_skins.css"));


            bundles.Add(new ScriptBundle("~/bundles/js")
                .Include(
               "~/Content/html/assets/bundles/libscripts.bundle.js",
               "~/Content/html/assets/bundles/vendorscripts.bundle.js",
               "~/Content/html/assets/bundles/morrisscripts.bundle.js",
               "~/Content/html/assets/bundles/jvectormap.bundle.js",
               "~/Content/html/assets/plugins/jvectormap/jquery-jvectormap-us-aea-en.js",
               "~/Content/html/assets/bundles/knob.bundle.js",
               "~/Content/html/assets/bundles/mainscripts.bundle.js",
               "~/Content/html/assets/js/pages/index.js"));


        }
    }
}
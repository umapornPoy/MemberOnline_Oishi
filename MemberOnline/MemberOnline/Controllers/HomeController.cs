using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MemberOnline.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult dashboard()
        {
            return View();
        }
        public ActionResult feedback()
        {
            return View();
        }
        public ActionResult info()
        {
            return View();
        }
        public ActionResult showMap()
        {
            return View();
        }
        public ActionResult showMap2()
        {
            return View();
        }
    }
}
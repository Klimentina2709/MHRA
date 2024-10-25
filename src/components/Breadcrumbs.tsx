import Link from "next/link";
import { useRouter } from "next/router";

type RouteLabels = {
  [key: string]: string;
};

const routeLabels: RouteLabels = {
  "/": "Почетна",
  "/about": "За Нас",
  "/blogs": "Блог",
  "/events": "Настани",
  "/conference": "Годишна конференција",
  "/events/group": "HR",
  "/events/group/hr_coffee": "HR Кафе",
  "/events/group/hr_weekend": "HR Викенд",
  "/events/group/hr_webinar": "HR Вебинар",
  "/events/group/hr_conference": "HR Конференции",
};

const getDynamicLabel = (href: string): string => {
  const blogRegex = /^\/blogs\/(.*)$/;
  const eventRegex = /^\/events\/(.*)$/;

  const blogMatch = href.match(blogRegex);
  if (blogMatch) {
    return "Блог пост";
  }

  const eventMatch = href.match(eventRegex);
  if (eventMatch) {
    return "Информации за настани";
  }

  return href;
};

const Breadcrumbs = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter(Boolean);

  const getLabel = (href: string, index: number): string => {
    if (routeLabels[href]) {
      return routeLabels[href];
    }
    if (index === pathSegments.length - 1) {
      return getDynamicLabel(href);
    }
    return href.charAt(0).toUpperCase() + href.slice(1);
  };

  return (
    <nav className="flex items-center space-x-2 max-w-[80%] mx-auto my-10">
      {pathSegments.length > 0 && (
        <Link href="/" className="hover:underline">
          {getLabel("/", 0)}
        </Link>
      )}
      {pathSegments.map((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/");
        const isUnclickable = href === "/events/group";

        return (
          <div key={href} className="flex items-center">
            <span className="mx-2">/</span>
            {isUnclickable ? (
              <span className="text-orange-500">{getLabel(href, index)}</span>
            ) : (
              <Link href={href} className="text-orange-500 hover:underline">
                {getLabel(href, index)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;

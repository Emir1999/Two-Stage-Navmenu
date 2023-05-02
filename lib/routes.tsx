import { NavItem } from 'models/NavItem';
import { useTranslation } from 'next-i18next';

export function NavItemsRoute() {
  const { t } = useTranslation();

  const navItems: NavItem[] = [
    {
      id: 'nav-bucher__us',
      title: t('links.about-us'),
      link: 'about-us',
      children: [
        {
          id: 'nav-bucher__mission',
          title: t('links.mission'),
          link: 'mission',
          children: [],
        },
        {
          id: 'nav-bucher__board-directors',
          title: t('links.board-directors'),
          link: 'board-directors',
          children: [],
        },
        {
          id: 'nav-bucher__group-managment',
          title: t('links.group-managment'),
          link: 'group-managment',
          children: [],
        },
        {
          id: 'nav-bucher__metrics',
          title: t('links.metrics'),
          link: 'metrics',
          children: [],
        },
        {
          id: 'nav-bucher__locations',
          title: t('links.locations'),
          link: 'locations',
          children: [],
        },
        {
          id: 'nav-bucher__sustainability',
          title: t('links.sustainability'),
          link: 'sustainability',
          children: [],
        },
        {
          id: 'nav-bucher__history',
          title: t('links.history'),
          link: 'history',
          children: [],
        },
      ],
    },
    {
      id: 'nav-bucher__business',
      title: t('links.business'),
      link: 'business',
      children: [
        {
          id: 'nav-bucher__kuhn',
          title: t('links.kuhn'),
          link: 'kuhn',
          children: [],
        },
        {
          id: 'nav-bucher__municipal',
          title: t('links.municipal'),
          link: 'municipal',
          children: [],
        },
        {
          id: 'nav-bucher__hydraulics',
          title: t('links.hydraulics'),
          link: 'hydraulics',
          children: [],
        },
        {
          id: 'nav-bucher__emhart-glass',
          title: t('links.emhart-glass'),
          link: 'emhart-glass',
          children: [],
        },
        {
          id: 'nav-bucher__specials',
          title: t('links.specials'),
          link: 'specials',
          children: [],
        },
      ],
    },
    {
      id: 'nav-bucher__investors',
      title: t('links.investors'),
      link: 'investors',
      children: [
        {
          id: 'nav-bucher__actions',
          title: t('links.actions'),
          link: 'actions',
          children: [],
        },
        {
          id: 'nav-bucher__general-assembly',
          title: t('links.general-assembly'),
          link: 'assembly',
          children: [],
        },
        {
          id: 'nav-bucher__corporate-governance',
          title: t('links.governance'),
          link: 'corporate-governance',
          children: [],
        },
        {
          id: 'nav-bucher__finance-reports',
          title: t('links.finance-reports'),
          link: 'finance-reports',
          children: [],
        },
        {
          id: 'nav-bucher__appointments',
          title: t('links.appointments'),
          link: 'appointments',
          children: [],
        },
      ],
    },
    {
      id: 'nav-bucher__media',
      title: t('links.media'),
      link: 'media',
      children: [
        {
          id: 'nav-bucher__media-share',
          title: t('links.media-share'),
          link: 'media-share',
          children: [],
        },
        {
          id: 'nav-bucher__ad',
          title: t('links.ad'),
          link: 'ad',
          children: [],
        },
        {
          id: 'nav-bucher__media-dose',
          title: t('links.media-dose'),
          link: 'media-dose',
          children: [],
        },
        {
          id: 'nav-bucher__publications',
          title: t('links.publications'),
          link: 'publications',
          children: [],
        },
        {
          id: 'nav-bucher__presentations',
          title: t('links.presentations'),
          link: 'presentations',
          children: [],
        },
        {
          id: 'nav-bucher__photos',
          title: t('links.photos'),
          link: 'photos',
          children: [],
        },
      ],
    },
    {
      id: 'nav-bucher__career',
      title: t('links.career'),
      link: 'career',
      children: [
        {
          id: 'nav-bucher__jobs',
          title: t('links.jobs'),
          link: 'jobs',
          children: [
            {
              id: 'nav-bucher__contact',
              title: t('links.contact'),
              link: 'contact',
              children: [
                {
                  id: 'nav-bucher__subscribe',
                  title: t('links.subscribe'),
                  link: 'subscribe',
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 'nav-bucher__industries',
          title: t('links.industries'),
          link: 'industries',
          children: [],
        },
        {
          id: 'nav-bucher__open-positions',
          title: t('links.open-positions'),
          link: 'open-positions',
          children: [],
        },
      ],
    },
  ];

  return navItems;
}

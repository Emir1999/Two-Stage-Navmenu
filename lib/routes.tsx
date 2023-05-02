import { NavItem } from 'models/NavItem';
import { useTranslation } from 'next-i18next';

export function NavItemsRoute() {
  const { t } = useTranslation();

  const navItems: NavItem[] = [
    {
      id: 'nav-bucher__us',
      title: t('links.about-us'),
      link: 'mission',
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
          link: 'mission',
          children: [],
        },
        {
          id: 'nav-bucher__group-managment',
          title: t('links.group-managment'),
          link: 'mission',
          children: [],
        },
        {
          id: 'nav-bucher__metrics',
          title: t('links.metrics'),
          link: 'mission',
          children: [],
        },
        {
          id: 'nav-bucher__locations',
          title: t('links.locations'),
          link: 'mission',
          children: [],
        },
        {
          id: 'nav-bucher__sustainability',
          title: t('links.sustainability'),
          link: 'mission',
          children: [],
        },
        {
          id: 'nav-bucher__history',
          title: t('links.history'),
          link: 'mission',
          children: [],
        },
      ],
    },
    {
      id: 'nav-bucher__business',
      title: t('links.business'),
      link: 'mission',
      children: [
        {
          id: 'nav-bucher__kuhn',
          title: t('links.kuhn'),
          link: 'mission',
          children: [],
        },
        {
          id: 'nav-bucher__municipal',
          title: t('links.municipal'),
          link: 'mission',
          children: [],
        },
        {
          id: 'nav-bucher__hydraulics',
          title: t('links.hydraulics'),
          link: 'mission',
          children: [],
        },
        {
          id: 'nav-bucher__emhart-glass',
          title: t('links.emhart-glass'),
          link: 'mission',
          children: [],
        },
        {
          id: 'nav-bucher__specials',
          title: t('links.specials'),
          link: 'mission',
          children: [],
        },
      ],
    },
    {
      id: 'nav-bucher__investors',
      title: t('links.investors'),
      link: 'mission',
      children: [
        {
          id: 'nav-bucher__actions',
          title: t('links.actions'),
          link: 'mission',
          children: [],
        },
        {
          id: 'nav-bucher__general-assembly',
          title: t('links.general-assembly'),
          link: 'mission',
          children: [],
        },
        {
          id: 'nav-bucher__corporate-governance',
          title: t('links.governance'),
          link: 'mission',
          children: [],
        },
        {
          id: 'nav-bucher__finance-reports',
          title: t('links.finance-reports'),
          link: 'mission',
          children: [],
        },
        {
          id: 'nav-bucher__appointments',
          title: t('links.appointments'),
          link: 'mission',
          children: [],
        },
      ],
    },
    {
      id: 'nav-bucher__media',
      title: t('links.media'),
      link: 'mission',
      children: [
        {
          id: 'nav-bucher__media-share',
          title: t('links.media-share'),
          link: 'mission',
          children: [],
        },
        {
          id: 'nav-bucher__ad',
          title: t('links.ad'),
          link: 'mission',
          children: [],
        },
        {
          id: 'nav-bucher__media-dose',
          title: t('links.media-dose'),
          link: 'mission',
          children: [],
        },
        {
          id: 'nav-bucher__publications',
          title: t('links.publications'),
          link: 'mission',
          children: [],
        },
        {
          id: 'nav-bucher__presentations',
          title: t('links.presentations'),
          link: 'mission',
          children: [],
        },
        {
          id: 'nav-bucher__photos',
          title: t('links.photos'),
          link: 'mission',
          children: [],
        },
      ],
    },
    {
      id: 'nav-bucher__career',
      title: t('links.career'),
      link: 'mission',
      children: [
        {
          id: 'nav-bucher__jobs',
          title: t('links.jobs'),
          link: 'mission',
          children: [
            {
              id: 'nav-bucher__contact',
              title: t('links.contact'),
              link: 'mission',
              children: [
                {
                  id: 'nav-bucher__subscribe',
                  title: t('links.subscribe'),
                  link: 'mission',
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 'nav-bucher__industries',
          title: t('links.industries'),
          link: 'mission',
          children: [],
        },
        {
          id: 'nav-bucher__open-positions',
          title: t('links.open-positions'),
          link: 'mission',
          children: [],
        },
      ],
    },
  ];

  return navItems;
}

interface ThemeConfig {
  app: {
    appName: string;
    appLogoImage: string;
  };
  layout: {
    type: string;
    header: string;
    sidebar: {
      isActive: boolean;
    };
  };
}

const themeConfig: ThemeConfig = {
  app: {
    appName: 'DMare',
    appLogoImage: 'https://via.placeholder.com/150x150',
  },
  layout: {
    type: 'vertical',
    header: 'sticky',
    sidebar: {
      isActive: false,
    },
  },
};

export default themeConfig;

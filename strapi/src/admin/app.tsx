import { useLocation } from 'react-router-dom';

import type { StrapiApp } from '@strapi/strapi/admin';
import { Button } from '@strapi/design-system';
import { Message } from '@strapi/icons';

const ViewCommentsButtonWrapper = () => {
  const location = useLocation();

  if (!location.pathname.includes("/content-manager/collection-types/api::post.post/")) {
    return null;
  }

  return (
    <Button onClick={() => {/* Your logic here */}} fullWidth={true} startIcon={<Message/>}>
      View Comments
    </Button>
  );
};

export default {
  bootstrap(app: StrapiApp) {
    app.getPlugin('content-manager').injectComponent('editView', 'right-links', {
      name: 'view-comments-button',
      Component: ViewCommentsButtonWrapper,
    });
  },
};
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import type { StrapiApp } from '@strapi/strapi/admin';
import { fetchPostWithComments } from './extentions/services/api';

import CommentsButton from './extentions/components/CommentsButton';
import {CommentType} from './extentions/helpers/types';

const ViewCommentsButtonWrapper = () => {
  const location = useLocation();
  const [documentId, setDocumentId] = useState<string | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const lastPart = pathParts[pathParts.length - 1];
    
    if (lastPart && lastPart !== 'create') {
      setDocumentId(lastPart);
    }
  }, [location.pathname]);

  useEffect(() => {
    const loadComments = async () => {
      if (documentId) {
        setLoading(true);
        const apiComments = await fetchPostWithComments(documentId);
        
        const mappedComments = apiComments.map(c => ({
          id: c.documentId,
          content: c.content,
          name: c.name,
          createdAt: c.createdAt
        }));
        
        setComments(mappedComments);
        setLoading(false);
      }
    };

    loadComments();
  }, [documentId]);

  if (!location.pathname.includes("/content-manager/collection-types/api::post.post/")) {
    return null;
  }

  return <CommentsButton loading={loading} initialComments={comments} />;
};

export default {
  bootstrap(app: StrapiApp) {
    app.getPlugin('content-manager').injectComponent('editView', 'right-links', {
      name: 'view-comments-button',
      Component: ViewCommentsButtonWrapper,
    });
  },
};
import Link from 'next/link';
import qs from 'query-string';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';
import urlJoin from 'url-join';

import Title from '../../../../../../features/Title';
import { useDetailContext } from '../../DetailProvider';
import Item from './Item';

const Related = memo(() => {
  const { t } = useTranslation('discover');
  const { related, category } = useDetailContext();

  return (
    <Flexbox gap={16}>
      <Title
        more={t('models.details.related.more')}
        moreLink={qs.stringifyUrl({
          query: {
            category,
          },
          url: '/discover/model',
        })}
      >
        {t('models.details.related.listTitle')}
      </Title>
      <Flexbox gap={8}>
        {related?.map((item, index) => {
          const link = urlJoin('/discover/model', item.identifier);
          return (
            <Link href={link} key={index} style={{ color: 'inherit', overflow: 'hidden' }}>
              <Item {...item} />
            </Link>
          );
        })}
      </Flexbox>
    </Flexbox>
  );
});

export default Related;

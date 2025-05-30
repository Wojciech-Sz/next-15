import React from 'react';
import { cn, formatDate } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Author, Startup } from '@/sanity/sanity.types';
import { Skeleton } from '@/components/ui/skeleton';

export type StartupCardType = Omit<Startup, 'author'> & {
  author?: Author;
};

const StartupCard = ({
  post,
}: {
  post: StartupCardType;
}) => {
  const {
    _id,
    _createdAt,
    title,
    category,
    image,
    description,
    author,
    views,
  } = post;
  return (
    <li className={'startup-card group'}>
      <div className={'flex-between'}>
        <p className={'startup-card_date'}>
          {formatDate(_createdAt)}
        </p>
        <div className={'flex gap-1.5'}>
          <EyeIcon className={'size-6 text-primary'} />
          <span className={'text-16-medium'}>{views}</span>
        </div>
      </div>

      <div className={'flex-between mt-5 gap-5'}>
        <div className={'flex-1 max-w-[70%]'}>
          <Link href={`/user/${author?._id}`}>
            <p className={'text-16-medium line-clamp-1'}>
              {author?.name}
            </p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3
              className={'text-26-semibold line-clamp-1 '}
            >
              {title}
            </h3>
          </Link>
        </div>
        <Link
          href={`/user/${author?._id}`}
          className={'shrink-0'}
        >
          <img
            src={author?.image}
            alt={author?.name || 'profile'}
            width={48}
            height={48}
            className={'rounded-full bg-gray-200'}
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className={'startup-card_desc'}>{description}</p>
        <img
          src={image}
          alt={title}
          className={'startup-card_img'}
        ></img>
      </Link>

      <div className={'flex-between gap-3 mt-5'}>
        <Link
          href={`/?query=${category?.toLowerCase()}`}
          scroll={false}
        >
          <p className={'text-16-medium'}>{category}</p>
        </Link>
        <Button className={'startup-card_btn'} asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((i) => (
      <li key={cn('skeleton', i)}>
        <Skeleton />
      </li>
    ))}
  </>
);
export default StartupCard;

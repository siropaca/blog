import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import { CONTENTS_MAX_WIDTH } from '@/components/Layout';
import { PagePath } from '@/lib/router';
import { formatDate, utcToJstTime } from '@/utils/date';

interface Props {
  imageName: string;
  title: string;
  publishedAt: string;
  tags: string[];
}

export const HeroImage = ({ imageName, title, publishedAt, tags }: Props): JSX.Element => {
  const localPublishedAt = formatDate(utcToJstTime(new Date(publishedAt)));

  return (
    <div className='relative h-52 overflow-hidden md:h-72 lg:h-80'>
      {/* 画像 */}
      <img
        className='absolute inset-0 m-auto w-full object-cover'
        src={`/heros/${imageName}.png`}
        alt='#'
      />

      {/* ぼかし */}
      <div
        className='absolute inset-0 m-auto bg-black/10 object-cover'
        style={{ backdropFilter: 'blur(3px)' }}
      />

      {/* タイトル */}
      <div
        className='absolute inset-x-0 bottom-0 pb-4 pt-16 text-white md:pb-5 lg:pb-6'
        style={{ background: 'linear-gradient(180deg, transparent 0, rgba(0,0,0,.60))' }}
      >
        <div
          className='m-auto px-4 md:px-8'
          style={{ maxWidth: CONTENTS_MAX_WIDTH }}
        >
          <h1 className='mb-2 text-xl font-semibold leading-relaxed md:mb-2 md:text-2xl lg:mb-2.5 lg:text-3xl'>
            {title}
          </h1>

          <div className='mb-3 flex items-center gap-2 text-sm md:text-base'>
            <FontAwesomeIcon icon={faCalendar} />
            <time className='tracking-widest'>{localPublishedAt}</time>
          </div>

          <div className='flex flex-wrap gap-4 text-sm'>
            {tags.map((tag) => (
              <Link
                key={tag}
                href={PagePath.tagResult(tag)}
                className='cursor-pointer hover:opacity-50'
              >
                # {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
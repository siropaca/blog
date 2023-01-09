import { useMutation } from '@apollo/client';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { Input, Select, Textarea } from '@/components/Inputs';
import { BlogSection } from '@/features/blog/components';
import { graphql } from '@/gql';
import { HeroImage } from '@/gql/graphql';
import { PagePath } from '@/lib/router';

const createPostQuery = graphql(`
  mutation CreatePost($data: PostCreateInput!) {
    createPost(data: $data) {
      id
    }
  }
`);

const publishPostQuery = graphql(`
  mutation PublishPost($where: PostWhereUniqueInput!) {
    publishPost(where: $where) {
      id
    }
  }
`);

interface NewPostField {
  title: string;
  description: string;
  heroImage: string;
  heroText: string;
}

export const NewBlogForm = (): JSX.Element => {
  const router = useRouter();

  const [commitCreateMutation, { loading: createPostLoading }] = useMutation(createPostQuery);
  const [commitPublishMutation, { loading: publishPostLoading }] = useMutation(publishPostQuery);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<NewPostField>();

  const loading = createPostLoading || publishPostLoading;

  const heroImageOptions = Object.entries(HeroImage).map(([key, value], index) => {
    return {
      label: `${++index}. ${key}`,
      value,
    };
  });

  const publishPost = (postId: string) => {
    commitPublishMutation({
      variables: {
        where: {
          id: postId,
        },
      },
      onCompleted: () => {
        router.replace(PagePath.blogDetail(postId));
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  const onSubmit = (formData: NewPostField) => {
    let heroImage = '';

    if (formData.heroImage === 'random') {
      const random = Math.floor(Math.random() * heroImageOptions.length);
      heroImage = heroImageOptions[random].value;
    }

    commitCreateMutation({
      variables: {
        data: {
          title: formData.title.replace(/\n/g, ' '),
          description: formData.description,
          showDescription: !!formData.description,
          heroImage: (heroImage || formData.heroImage) as HeroImage,
          heroText: formData.heroText,
          tags: [],
        },
      },
      onCompleted: (data) => {
        publishPost(data.createPost?.id!);
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BlogSection>
        {/* Title */}
        <div>
          <div className='mb-2'>Title *</div>

          <Textarea
            className='h-32'
            {...register('title')}
          />
        </div>

        {/* Description */}
        <div className='mt-4'>
          <div className='mb-2'>Description</div>

          <Textarea
            className='h-32'
            {...register('description')}
          />
        </div>

        {/* Tags */}
        <div className='mt-4'>
          <div className='mb-2'>Tags</div>
          aa
        </div>

        {/* Hero Image */}
        <div className='mt-4'>
          <div className='mb-2'>Hero Image</div>

          <div className='flex items-end gap-x-4'>
            <Input
              type='text'
              placeholder='Text'
              {...register('heroText')}
            />

            <Select
              {...register('heroImage')}
              options={[{ label: 'Random', value: 'random' }, ...heroImageOptions]}
            />

            <div className='opacity-50 hover:opacity-80'>
              <Link
                href={PagePath.heroes()}
                target='_blank'
                rel='noreferrer'
              >
                Sample
              </Link>

              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className='ml-1'
                size='sm'
              />
            </div>
          </div>
        </div>

        {errors.title?.message && <div>{JSON.stringify(errors.title.message)}</div>}

        <div className='mt-4 text-right'>
          <button disabled={!isDirty || loading}>{loading ? '作成中...' : '作成'}</button>
        </div>
      </BlogSection>
    </form>
  );
};

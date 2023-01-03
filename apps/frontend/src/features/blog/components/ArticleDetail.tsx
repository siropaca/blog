import { useQuery } from '@apollo/client';

import { graphql } from '@/gql';

interface Props {
  articleId: string;
}

const queryDocument = graphql(`
  query Article($where: ArticleWhereUniqueInput!) {
    article(where: $where) {
      id
      title
      description
      tags
      articleNodes {
        id
        body
      }
    }
  }
`);

export const ArticleDetail = (props: Props): JSX.Element => {
  const { loading, error, data } = useQuery(queryDocument, {
    variables: {
      where: {
        id: props.articleId,
      },
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  if (!data || !data.article) {
    return <p>Sorry not found.</p>;
  }

  return (
    <div>
      <h1>{data.article?.title}</h1>
      <h2>{data.article?.description}</h2>
      <h2>{JSON.stringify(data.article?.tags)}</h2>
      {data.article?.articleNodes.map((node) => {
        return <div key={node.id}>{node.body}</div>;
      })}
    </div>
  );
};
// import React from 'react';

// import { Section, Container } from '@components/global';

// import FaqItem from '@common/FaqItem';
// import ExternalLink from '@common/ExternalLink';

// const FAQS = [
//   {
//     title:
//       'A internet além das redes sociais, entendendo como funcionam os algoritmos',
//     content: () => (
//       <>
//         Lorem ipsum tincidunt rhoncus non eros turpis adipiscing nulla, ornare
//         class phasellus dapibus bibendum augue nulla varius, platea aenean
//         hendrerit diam pretium suscipit non. purus proin netus nisl commodo sit
//         aptent diam lacus, tempor semper nunc litora vestibulum sit fringilla,
//         est lobortis euismod sem hac arcu rutrum. suscipit nisl pharetra orci
//         quisque ullamcorper placerat fermentum eros commodo, sed lacinia
//         malesuada augue vulputate semper sodales diam, nibh est ac pulvinar
//         risus arcu curabitur vitae. tellus nulla enim nibh nisi urna hac velit
//         at tristique, pellentesque commodo tempor habitasse suspendisse sed
//         risus molestie bibendum, viverra eu mi imperdiet quisque etiam quam leo.
//       </>
//     ),
//   },
//   {
//     title: 'Dados e narrativas',
//     content: () => (
//       <>
//         Lacinia non velit imperdiet ullamcorper phasellus dapibus suscipit
//         ultricies semper, risus urna mi quis tortor lorem tristique mauris odio
//         primis, donec suspendisse tempus fusce senectus litora ut class. iaculis
//         hac adipiscing torquent risus luctus viverra augue elementum, cursus hac
//         faucibus a fusce rutrum dapibus, ipsum semper pulvinar aliquam ornare
//         tempus donec. interdum dui malesuada vulputate dapibus ut varius
//         facilisis faucibus, tortor feugiat conubia ultrices eu proin aliquam ut,
//         adipiscing pharetra ultrices vestibulum mauris per orci. fames feugiat
//         sit mattis tempor accumsan ad ultricies, rutrum massa libero porttitor
//         commodo mauris massa consectetur, platea eget etiam integer tellus
//         feugiat.
//       </>
//     ),
//   },
//   {
//     title: 'Ativismo além da rede',
//     content: () => (
//       <>
//         Quisque mattis congue vestibulum ornare nostra ut varius mattis aenean
//         sociosqu, nisl rhoncus nullam at consequat ligula molestie torquent
//         justo lacus, fames litora curabitur metus ornare varius at dui egestas.
//         condimentum hendrerit eu netus egestas rhoncus, fermentum malesuada mi
//         adipiscing ultricies felis, iaculis tortor aenean curabitur. morbi
//         luctus praesent cubilia mauris senectus iaculis semper, eget inceptos
//         sodales neque velit odio blandit, placerat bibendum faucibus aliquet
//         cubilia egestas. ultrices erat dictumst quisque elementum gravida
//         elementum est, consequat interdum iaculis lobortis phasellus dapibus
//         maecenas, sagittis porta blandit suscipit pharetra platea. gravida
//         himenaeos magna lobortis euismod porta nunc sem justo metus aliquet
//         ultricies, placerat fames nullam hendrerit sagittis mattis ipsum neque
//         aenean.
//       </>
//     ),
//   },
// ];

// const Faq = () => (
//   <Section id="trilhas">
//     <Container>
//       <h1 style={{ marginBottom: 40 }}>Trilhas</h1>
//       <div>
//         {FAQS.map(({ title, content }) => (
//           <FaqItem title={title} key={title}>
//             {content()}
//           </FaqItem>
//         ))}
//       </div>
//     </Container>
//   </Section>
// );

// export default Faq;

import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text } from 'rebass';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Section, Container } from '@components/global';
import { CardContainer, Card } from '../common/Card/Card';

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: 5px solid rgb(255, 200, 11);
  border-radius: 10px;
`;

const Post = ({ title, text, image, url }) => (
  <Card onClick={() => window.open(url, '_blank')} pb={4}>
    <EllipsisHeading m={3} p={1}>
      {title}
    </EllipsisHeading>
    {image && <CoverImage src={image} height="200px" alt={title} />}
    <Text m={3}>{text}</Text>
  </Card>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

const posts = [
  {
    id: 0,
    title: 'A internet além das redes sociais, entendendo como funcionam os algoritmos',
    text: 'Lorem ipsum tincidunt rhoncus non eros turpis adipiscing nulla, ornare class phasellus dapibus bibendum augue nulla varius, platea aenean hendrerit diam pretium suscipit non. purus proin netus nisl commodo sitaptent diam lacus, tempor semper nunc litora vestibulum sit fringilla, est lobortis euismod sem hac arcu rutrum. suscipit nisl pharetra orc quisque ullamcorper placerat fermentum eros commodo, sed lacinia malesuada augue vulputate semper sodales diam, nibh est ac pulvina risus arcu curabitur vitae. ',
    image: 'https://projetoeko.com.br/static/f7216587db1b65979e42d36f83007676/4e76e/lisa.jpg',
    url: 'https://projetoeko.com.br/static/f7216587db1b65979e42d36f83007676/4e76e/lisa.jpg',
  },
  {
    id: 1,
    title: 'Como os dados Públicos e abertos podem me ajudar?',
    text: 'Lorem ipsum tincidunt rhoncus non eros turpis adipiscing nulla, ornare class phasellus dapibus bibendum augue nulla varius, platea aenean hendrerit diam pretium suscipit non. purus proin netus nisl commodo sitaptent diam lacus, tempor semper nunc litora vestibulum sit fringilla, est lobortis euismod sem hac arcu rutrum. suscipit nisl pharetra orc quisque ullamcorper placerat fermentum eros commodo, sed lacinia malesuada augue vulputate semper sodales diam, nibh e.',
    image: 'https://projetoeko.com.br/static/f7216587db1b65979e42d36f83007676/4e76e/lisa.jpg',
    url: 'https://projetoeko.com.br/static/f7216587db1b65979e42d36f83007676/4e76e/lisa.jpg',
  },
  {
    id: 2,
    title: 'Como usar as redes sociais de uma forma segura?',
    text: 'Lorem ipsum tincidunt rhoncus non eros turpis adipiscing nulla, ornare class phasellus dapibus bibendum augue nulla varius, platea aenean hendrerit diam pretium suscipit non. purus proin netus nisl commodo sitaptent diam lacus, tempor semper nunc litora vestibulum sit fringilla, est lobortis euismod sem hac arcu rutrum. suscipit nisl pharetra orc quisque ullamcorper placerat fermentum eros commodo.',
    image: 'https://projetoeko.com.br/static/f7216587db1b65979e42d36f83007676/4e76e/lisa.jpg',
    url: 'https://projetoeko.com.br/static/f7216587db1b65979e42d36f83007676/4e76e/lisa.jpg',
  },
]

const Writing = () => (
  <Section id="trilhas">
    <Container>
      <CardContainer minWidth="300px">
        {posts.map(p => (
          <Fade bottom>
            <Post key={p.id} {...p} />
          </Fade>
        ))}
      </CardContainer>
    </Container>
  </Section>
);

export default Writing;

import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title:
      'A internet além das redes sociais, entendendo como funcionam os algoritmos',
    content: () => (
      <>
        Lorem ipsum tincidunt rhoncus non eros turpis adipiscing nulla, ornare
        class phasellus dapibus bibendum augue nulla varius, platea aenean
        hendrerit diam pretium suscipit non. purus proin netus nisl commodo sit
        aptent diam lacus, tempor semper nunc litora vestibulum sit fringilla,
        est lobortis euismod sem hac arcu rutrum. suscipit nisl pharetra orci
        quisque ullamcorper placerat fermentum eros commodo, sed lacinia
        malesuada augue vulputate semper sodales diam, nibh est ac pulvinar
        risus arcu curabitur vitae. tellus nulla enim nibh nisi urna hac velit
        at tristique, pellentesque commodo tempor habitasse suspendisse sed
        risus molestie bibendum, viverra eu mi imperdiet quisque etiam quam leo.
      </>
    ),
  },
  {
    title: 'Dados e narrativas',
    content: () => (
      <>
        Lacinia non velit imperdiet ullamcorper phasellus dapibus suscipit
        ultricies semper, risus urna mi quis tortor lorem tristique mauris odio
        primis, donec suspendisse tempus fusce senectus litora ut class. iaculis
        hac adipiscing torquent risus luctus viverra augue elementum, cursus hac
        faucibus a fusce rutrum dapibus, ipsum semper pulvinar aliquam ornare
        tempus donec. interdum dui malesuada vulputate dapibus ut varius
        facilisis faucibus, tortor feugiat conubia ultrices eu proin aliquam ut,
        adipiscing pharetra ultrices vestibulum mauris per orci. fames feugiat
        sit mattis tempor accumsan ad ultricies, rutrum massa libero porttitor
        commodo mauris massa consectetur, platea eget etiam integer tellus
        feugiat.
      </>
    ),
  },
  {
    title: 'Ativismo além da rede',
    content: () => (
      <>
        Quisque mattis congue vestibulum ornare nostra ut varius mattis aenean
        sociosqu, nisl rhoncus nullam at consequat ligula molestie torquent
        justo lacus, fames litora curabitur metus ornare varius at dui egestas.
        condimentum hendrerit eu netus egestas rhoncus, fermentum malesuada mi
        adipiscing ultricies felis, iaculis tortor aenean curabitur. morbi
        luctus praesent cubilia mauris senectus iaculis semper, eget inceptos
        sodales neque velit odio blandit, placerat bibendum faucibus aliquet
        cubilia egestas. ultrices erat dictumst quisque elementum gravida
        elementum est, consequat interdum iaculis lobortis phasellus dapibus
        maecenas, sagittis porta blandit suscipit pharetra platea. gravida
        himenaeos magna lobortis euismod porta nunc sem justo metus aliquet
        ultricies, placerat fames nullam hendrerit sagittis mattis ipsum neque
        aenean.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="trilhas">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Trilhas</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;

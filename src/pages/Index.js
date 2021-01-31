import React from 'react';

import Header1 from '../components/headers/Header1';
import HowItWorks2 from '../components/how-it-works/HowItWorks2';
import Features1 from '../components/features/Features1';
import Pricing1 from '../components/pricing/Pricing1';
import Team1 from '../components/team/Team1';
import Footer2 from '../components/footers/Footer2';
import Video1 from '../components/video/Video1';
import Docs1 from '../components/documentation/Docs1';

export default function Index() {
  return (
    <React.Fragment>
      <Header1
        content={{
          'header-p1': 'The software you need',
          'header-p2': 'to run your business financials',
          description:
            "Let's get you connected! We've designed a simple, efficient service for companies to automate their financial processes.",
          'primary-action': 'Register',
          'secondary-action': 'Login',
          pattern: 'nereus-assets/img/bg/pattern2.png',
        }}
      />

      <HowItWorks2
        content={{
          'header-p1': 'Automating enterprises financial data',
          'header-p2': 'management and analytics',
          description: 'Manage money, not spreadsheets\n',
          'col1-header': 'Bank reconciliation and accounting',
          'col2-header': 'AI data insights and automation',
          'col3-header': 'Automated and human error-safe processes',
        }}
      />

      <Features1
        content={{
          'header-p1': 'Solving',
          'header-p2': 'the industry problems you relate to',
          description:
            '"In terms of IT, SME businesses are consumerized by the people\nbut not yet by the Internet", Thomas Stafford - DST Global\n',
          'col1-header': 'Manual invoice collection and categorization',
          'col2-header': 'Invoice and bank reconciliation',
          'col3-header': 'Complexity for non-specialized managers',
          'col4-header': 'Paper invoices analysis',
          'col5-header':
            'No automation in business analytics and decision making',
          'col6-header': 'Historical data querying',
        }}
      />

      <Video1
        content={{
          'url': 'https://www.youtube.com/watch?v=_eLPdUb8s58&t=1s'
        }}
      />

      <Pricing1
        content={{
          'header-p1': 'Take advantage',
          'header-p2': 'of our competitive plans',
          option1: 'Monthly',
          option2: 'Annual',
          '01_title': 'Standard',
          '01_price': '$4.99',
          '01_benefit1': 'Up to 100 invoices/month',
          '01_benefit2': 'Up to 10 standard users',
          '02_title': 'Pro',
          '02_price': '$49.99',
          '02_benefit1': 'Up to 1000 invoices/month',
          '02_benefit2': 'Up to 50 standard users',
          '02_benefit3': 'Unlimited auditing users',
          '03_title': 'Enterprises',
          '03_price': 'Custom Plan',
          '03_benefit1': 'Custom user and invoice limit',
          '03_benefit2': 'Adjusted price',
          '03_primary-action': 'Contact Sales',
        }}
      />

      <Team1
        content={{
          'header-p1': 'Our team',
          'header-p2': 'always here to help yours',
          description:
            "We're here to answer your questions and discuss the automation of your company financial processes.",

          '01_image': '/images/barbara.jpeg',
          '01_name': 'Bárbara Cardoso',
          '01_job': 'Frontend Developer',
          '01_github': 'https://github.com/Barbara29',
          '01_linkedin': 'https://linkedin.com/in/barbaraferreira98',

          '02_image': '/images/bruno.jpeg',
          '02_name': 'Bruno Martins',
          '02_job': 'Backend Developer',
          '02_github': 'https://github.com/BrunoMartins11',
          '02_linkedin': 'https://www.linkedin.com/in/brunocmartins11',

          '03_image': '/images/catarina.jpg',
          '03_name': 'Catarina Machado',
          '03_job': 'Frontend Developer',
          '03_github': 'https://github.com/catarinamachado',
          '03_linkedin': 'https://www.linkedin.com/in/catarinaamachado',

          '04_image': '/images/eduardo.jpg',
          '04_name': 'Eduardo Barbosa',
          '04_job': 'Backend Developer',
          '04_github': 'https://github.com/herulume',
          '04_linkedin': 'https://www.linkedin.com/in/herulume',

          '05_image': '/images/filipe.jpg',
          '05_name': 'Filipe Monteiro',
          '05_job': 'Data Analyst',
          '05_github': 'https://github.com/pimonteiro',
          '05_linkedin': 'https://linkedin.com/in/barbaraferreira98',

          '06_image': '/images/jessicalemos.jpg',
          '06_name': 'Jéssica Lemos',
          '06_job': 'Frontend Developer',
          '06_github': 'https://github.com/jessicalemos',
          '06_linkedin': 'https://www.linkedin.com/in/jessicalemos9',

          '07_image': '/images/joaovilaca.png',
          '07_name': 'João Vilaça',
          '07_job': 'Backend Developer',
          '07_github': 'https://github.com/machadovilaca',
          '07_linkedin': 'https://www.linkedin.com/in/machadovilaca',

          '08_image': '/images/grenhas.png',
          '08_name': 'João Grenhas',
          '08_job': 'Requirement and Architecture Analyst',
          '08_github': 'https://github.com/JMGrenhas',
          '08_linkedin': 'https://www.linkedin.com/in/JoãoMGrenhas',

          '09_image': '/images/marcio.jpg',
          '09_name': 'Márcio Sousa',
          '09_job': 'Backend Developer',
          '09_github': 'https://github.com/dunnadan',
          '09_linkedin': 'https://www.linkedin.com/in/marcio20sousa',
        }}
      />

      <Docs1 />

      <Footer2
        content={{
          copy: '\u00a9 2020 Infinions. All rights reserved.',
        }}
      />
    </React.Fragment>
  );
}


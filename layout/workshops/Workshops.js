import HeadingTwo from '@/components/headingTwo/HeadingTwo';
import Workshop from '@/components/workshop/Workshop';
import React from 'react';

const Workshops = () => {
  const workshops = [
    {
      id: 1,

      images: [
        { id: 1, src: '/images/DSC_5032.JPG' },
        { id: 2, src: '/images/DSC_5038.JPG' },
      ],

      sumDesc: [
        'The most important points and advantages offered by the Attijariwafa Group in all the countries in which it is present:',
        ' 1. The geographical spread and strong presence of the Attijariwafa Group, especially in West Central and North Africa.',
        '2. Banking and entry into East African countries through Attijariwafa Egypt as the main gateway to cover the countries of East and South Africa.',
        '3. The rich diversity of banking products, banking expertise and competencies offered by a group Commercial Wafa for all sectors and industries.',
        `4.Attijariwafa Bank's contribution to the promotion of trade exchange operations, especially export operations,in line with the direction of the Egyptian state`,
        `5. Attijariwafa Egypt works at the highest level to coordinate with all export institutions,
         councils and ministries concerned in international trade exchange operations`,
        `6. The presence of a network of branches of Attijariwafa Bank is used to increase the profits of the exporting companies and to bring confidence between the bank and its
          customers, through the following:`,
        `• Reducing the commercial costs of operations and not needing external correspondents from other banks.`,
        `• Reducing risk tolerance, as Attijariwafa Bank spreads in West, Central and North Africa, and this reduces banking costs that fall on the customer in the event of dealing with another bank.`,
        `    • Attijariwafa Group works to open and establish new markets for Egyptian exporting clients, as well as dealing with clients with confidence and reliable credit capacity through (KYC know your customer)`,
        `  • Providing opportunities for clients to enter non-Arab markets and overcoming the obstacle of the French and English languages ​​Carrying out international conferences that are attended Officials and politicians at the highest level, as well as arranging meetings As follows: B-2-G   B-2-C   B-2-B In order to facilitate customers who wish to enter new international markets,`,
        ` • Attijariwafa provides economic data for those countries.`,
        `• In addition to joining the African Development Club website, which opens up many opportunities for its members and data of interest to African markets.`,
      ],

      sumTitle: 'Finance and Investment Wafa Bank',

      workLink: '/Finance and Investment_Wafa Bank.docx',
    },
    {
      id: 2,

      images: [
        { id: 1, src: '/images/DSC_2151.JPG' },
        { id: 2, src: '/images/SLH_5865.JPG' },
      ],

      sumTitle: 'Strategic Alliances Dr Ahmed Farag',
      sumDesc: [
        ` The importance of the workshop comes from the participation of various stakeholders to define a roadmap for the growth of investment and economic alliances,
      whether industrial or commercial, and to achieve high added value in alliances and partnerships, and to propose the necessary solutions to steadily double
      these alliances in order to be a locomotive for the economic growth of the participating countries and contribute to ensuring the achievement of sustainable
      development in those countries.
      The workshop also reviews the most important good practices and different experiences for business development in various institutions, and the tools
      that were used for development, internationalization and penetration of global markets through the support of countries, advisory institutions and international development agencies.
      This will be done by identifying the most important axes of action and presenting the necessary recommendations so that their implementation can be started immediately.
      We believe that we only need to continue advancing the development and integration agenda, and to have leaders who believe in it and can show it.`,
      ],

      workLink: '/Strategic Alliances_Dr Ahmed Farag.docx',
    },
    {
      id: 3,

      images: [
        { id: 1, src: '/images/SLH_5860.JPG' },
        { id: 2, src: '/images/SLH_5858.JPG' },
      ],

      sumTitle: 'Sustainability Dr Lamia Shihata',
      sumDesc: [
        `There has been significant interest within Egypt's business sector in developing ways to adopt sustainable principles that meet the needs of both local industrial firms and the broader Egyptian community, as well as aligning with the principles of sustainable development enshrined in Vision 2030, Egypt's long-term economic development plan.
      According to the Lima Declaration, the United Nations Industrial Development Organization (UNIDO) states that inclusive and sustainable industrial development (ISID) is a key driver for the successful integration of economic, social and environmental dimensions, which is crucial for the full implementation of sustainable development for sustainable development. Benefits for Future Generations (UNIDO 2013) Environmental, Social and Economic Dimensions.
      Growing global awareness of the challenges of sustainability dimensions has prompted companies, investors and consumers to increasingly integrate sustainability factors into their decision-making processes. As the concept of business success and value creation evolves, efforts are being made to regulate sustainability standards as a way to guide responsible industrial policies and encourage companies to take actions to ensure environmental sustainability, positive social impact, and strong corporate governance.

      This workshop aims to:`,
        `• Identify and highlight the tools, techniques and roadmaps adopted by decision makers to apply and evaluate sustainability goals in their organizations in the context of the Sustainable Development Goals (SDGs)`,
        `• Develop an updated road map for industrial development in light of the dimensions and objectives of sustainability.`,
        `• Discussing the obstacles and challenges facing sustainable industrial development`,
        `Workshop focal areas:
        Provide a comprehensive approach to solving issues of sustainable industrial development; following`,
        `· Perspectives to be considered in discussions:`,
        `· Sustainability goals, most notably in leading industries`,
        `· Enabling the industrial transition to net zero`,
        `· Reducing emissions and waste resulting from operation`,
        `· Raising industrial awareness and expertise in sustainability issues`,
        `· Developing capabilities to meet the needs of the labor market`,
      ],

      //
      //
      //
      //
      //
      // `,

      workLink: '/Sustainability_Dr Lamia Shihata.docx',
    },
    {
      id: 4,

      images: [
        { id: 1, src: '/images/DSC_5013.JPG' },
        { id: 2, src: '/images/DSC_5014.JPG' },
      ],

      sumTitle: 'Technology and Innovation',
      sumDesc: [
        `Companies need to focus on improving their absorptive capacity in order to improve their
      technological capabilities and develop products and services. Social capital is considered one of the most
      important resources that are exploited in companies to build absorptive capacity to improve innovation
      and overall performance, while the ability of companies to absorb knowledge from those social
      capitals is one of the most important strategies on the basis of which competitive advantage is built. Social heads include partnerships, economic relations with companies, governmental and non-governmental organizations, and partnerships with similar companies and suppliers.
      Social capital may be used to stimulate co-creation to develop new products and services, by investing
      in employee innovations, which is called internal corporate venturing, or by investing in similar
      small external companies or among suppliers, and this is called entrepreneurship. External business.
      external corporate venturing
      Therefore, the workshop aims to discuss the role of social capital in improving the absorptive capacity of companies and supporting technological
      innovations through internal and external entrepreneurship.`,
        ` Dialogue axes:`,
        `(1) Provide examples of global companies that have improved absorptive capacity and co-creation.`,
        `(2)A discussion on the role of social capital in building the competitive advantage of Egyptian companies.`,
        `(3) A discussion on internal leadership strategies in Egyptian companies.`,
        `(4)Discussion about external leadership strategies in Egyptian companies.`,
        `(5) A discussion on improving the external environment to support the joint innovation of Egyptian companies.`,
      ],

      workLink: '/Technology and Innovation.docx',
    },
  ];
  return (
    <div className="text-center  py-5">
      <HeadingTwo title={'workshops'} />
      <div className="d-flex flex-column gap-4">
        {workshops.map(
          ({
            images,
            sumDesc,
            sumTitle,
            id,
            video,
            videoLink,
            picsLink,
            workLink,
          }) => (
            <Workshop
              key={id}
              images={images}
              sumDesc={sumDesc}
              sumTitle={sumTitle}
              id={id}
              workLink={workLink}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Workshops;

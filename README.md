# Ethics and Integrity Website

![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Adili: The Conversational Bot](#adili-the-conversational-bot)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Description

The Ethics and Integrity website aims to disseminate ethical behavior and integrity across the organization. The site features KQ's Mission, Vision, Values, practical Case Studies, Ethics Ambassadors. A key component of the website is **Adili**, an interactive conversational bot designed to assist users by answering questions related to ethics and integrity, providing guidance, and engaging users in thoughtful conversations.

## Features

- **KQ's Mission, Vision, and Values**: Clearly articulated statements that define the organization's ethical framework and aspirations.
- **Practical Case Studies**: Real-world examples illustrating ethical dilemmas and best practices to foster understanding and discussion.
- **Ethics Ambassadors**: Designated individuals within the organization who promote ethical behavior and serve as points of contact for ethical inquiries.
- **Conversational Bot**: Adili can engage users in discussions, answer questions, and provide recommendations on ethical dilemmas.
- **User-Friendly Interface**: An intuitive and responsive design for a seamless user experience.

## Technologies

- **Frontend**: Next.js
- **Deployment**: Vercel (for the frontend)

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://jeffmakuto@dev.azure.com/jeffmakuto/Adili/_git/Adili
   ```
2. Navigate to the project directory:
   ```bash
   cd repository
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Usage

To run the application locally:

1. Start the frontend application:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000`.
3. Set up environment variables:
   Create a `.env` file in the root directory and add your configuration settings:
   ```plaintext
   NEXT_PUBLIC_SIGN_INTEGRITY_CODE=https://forms.office.com/pages/responsepage.aspx?id=2ap03WnFOka8FwuiWo-jiJuoJe_UuntDvDF5yRWFgDpUMlc4UktGMjZLNVlMV1ROOUQxMURLSko1WC4u&route=shorturl
   NEXT_PUBLIC_IC_EMBED_SRC=https://kenyaairwaysplc.sharepoint.com/sites/kqdocshares/omnidocs/_layouts/15/embed.aspx?UniqueId=8d6c08a7-cad4-4186-b4b3-a260a89397e8
   NEXT_PUBLIC_KQ_ETHICS_HOTLINE_URL=http://www.kenyaairways.ethicspoint.com/
   NEXT_PUBLIC_CONTACT_EMAIL=ethics.integrity@kenya-airways.com
   NEXT_PUBLIC_SPONSORSHIP_POLICY_URL=https://kenyaairwaysplc.sharepoint.com/:b:/r/sites/kqdocshares/omnidocs/Manuals%20Library/KQ%20Policies/Sponsorship%20PolicyApproved%20by%20CEO%2020042021.pdf?csf=1&web=1&e=aLRg1E
   NEXT_PUBLIC_DECLARATION_LINK=https://forms.office.com/pages/responsepage.aspx?id=2ap03WnFOka8FwuiWo-jiJuoJe_UuntDvDF5yRWFgDpUMlc4UktGMjZLNVlMV1ROOUQxMURLSko1WC4u&route=shorturl
   NEXT_PUBLIC_DATA_PROTECTION_POLICY_URL=https://kenyaairwaysplc.sharepoint.com/:b:/r/Notices/dataprotection/DATA%20PROTECTION%20POLICY%20_Issue%201%20Revision%200.pdf?csf=1&web=1&e=VYgy0R
   NEXT_PUBLIC_FETCH_TIMEOUT=5000
   NEXT_PUBLIC_ENVIRONMENTAL_POLICY_URL=https://kenyaairwaysplc.sharepoint.com/:b:/r/sites/kqdocshares/omnidocs/Manuals%20Library/KQ%20Policies/Environmental%20Policy%20Statement%202023.pdf?csf=1&web=1&e=X9NdPF
   NEXT_PUBLIC_PRIVACY_POLICY_URL=
   NEXT_PUBLIC_COOKIE_POLICY_URL=
   NEXT_PUBLIC_GIFT_REGISTER=
   NEXT_PUBLIC_SEXUAL_HARASSMENT_POLICY_URL=
   NEXT_PUBLIC_WB_POLICY_URL=
   NEXT_PUBLIC_CM_POLICY_URL=
   NEXT_PUBLIC_ACCEPTABLE_USE_POLICY_URL=
   NEXT_PUBLIC_INFO_SECURITY_POLICY_URL=
   NEXT_PUBLIC_BOT_API_URL=
   NEXT_PUBLIC_VIDEO_URL=
   NEXT_PUBLIC_CSDLS_VIDEO_URL=
   NEXT_PUBLIC_ADILI_VIDEO_URL=
   NEXT_PUBLIC_CS_VIDEO_URL=
   NEXT_PUBLIC_CEO_VIDEO_URL=
   ```

## Adili: The Conversational Bot

**Adili** is an interactive conversational bot integrated into the website. It provides users with the following functionalities:

- **Answering Questions**: Adili can respond to queries related to ethics and integrity.
- **Engaging in Dialogues**: Users can have meaningful conversations with Adili about ethical dilemmas and principles.
- **Resource Recommendations**: Based on user queries, Adili can suggest relevant ethics and integrity resources.

### Example Interaction

```plaintext
User: What is the KQ's Mission?
Adili: To propel Africa’s prosperity by connecting its people, cultures and markets.
```

## Deployment

This project is deployed on [Vercel](https://vercel.com/) for the frontend. You can access the live application at:

[Adili Website](https://adili-v3.vercel.app/)

### Vercel Configuration

Add the environemnt variables in the Vercel dashboard under Settings > Environment Variables.

## Contributing

We welcome contributions to improve the project. To contribute:

1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.

## Contact

Jeff Makuto - [Email](mailto:hjeffmakuto@proton.me)  
Project Link: [Adili Repository](https://jeffmakuto@dev.azure.com/jeffmakuto/Adili/_git/Adili)  
Live Demo: [Adili Website](https://adili-v3.vercel.app/)

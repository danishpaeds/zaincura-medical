#!/usr/bin/env python3

import re

# Read the current file
with open('src/app/std-testing-dubai-confidential/page.tsx', 'r') as f:
    content = f.read()

# Enhanced JSON-LD with FAQ
jsonld_addition = '''  },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where can I find an STD clinic near me in Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zain Cura Medical Center offers confidential STD testing at our STD clinic located in Al Ghurair Centre, Deira. We also provide home collection services throughout Dubai for maximum privacy.'
        }
      },
      {
        '@type': 'Question',
        name: 'What does a full panel STD test include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our comprehensive full panel STD test includes HIV 1&2, Hepatitis B & C, Syphilis, Chlamydia, Gonorrhea, and Herpes 1&2. This full STD test covers all major sexually transmitted infections.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does a 10 panel STD test cost in Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our 10 panel STD test is competitively priced and includes comprehensive screening for major STDs. Contact us for current pricing and insurance coverage options.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I get a quick STD test with same-day results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer quick STD test options with results available within 24-48 hours for most tests. Some rapid tests can provide results on the same day.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is included in a sexual health check up?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our comprehensive sexual health check up includes full STD panel testing, consultation with healthcare professionals, and personalized health advice. We ensure complete confidentiality throughout the process.'
        }
      }
    ]'''

# Find and replace the areaServed section to add mainEntity
old_pattern = r'  areaServed: \{\s*\'@type\': \'City\',\s*name: \'Dubai\',\s*addressCountry: \'AE\'\s*\}'
new_pattern = '''  areaServed: {
    '@type': 'City',
    name: 'Dubai',
    addressCountry: 'AE'
  },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where can I find an STD clinic near me in Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zain Cura Medical Center offers confidential STD testing at our STD clinic located in Al Ghurair Centre, Deira. We also provide home collection services throughout Dubai for maximum privacy.'
        }
      },
      {
        '@type': 'Question',
        name: 'What does a full panel STD test include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our comprehensive full panel STD test includes HIV 1&2, Hepatitis B & C, Syphilis, Chlamydia, Gonorrhea, and Herpes 1&2. This full STD test covers all major sexually transmitted infections.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does a 10 panel STD test cost in Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our 10 panel STD test is competitively priced and includes comprehensive screening for major STDs. Contact us for current pricing and insurance coverage options.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I get a quick STD test with same-day results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer quick STD test options with results available within 24-48 hours for most tests. Some rapid tests can provide results on the same day.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is included in a sexual health check up?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our comprehensive sexual health check up includes full STD panel testing, consultation with healthcare professionals, and personalized health advice. We ensure complete confidentiality throughout the process.'
        }
      }
    ]
  }'''

content = re.sub(old_pattern, new_pattern, content, flags=re.MULTILINE | re.DOTALL)

# Write the updated file
with open('src/app/std-testing-dubai-confidential/page.tsx', 'w') as f:
    f.write(content)

print("JSON-LD FAQ schema successfully added!")

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  TestTube,
  Clock,
  CheckCircle,
  Calendar,
  MessageCircle,
  Phone,
  Home,
  Heart,
  Shield,
  Activity,
  Users,
  Beaker,
  Droplets,
  Search,
  FileText,
  TrendingUp,
  Zap
} from 'lucide-react'
import Link from 'next/link'
import { MobileCTABar } from '@/components/MobileCTABar'
import { Breadcrumb, BreadcrumbConfigs } from '@/components/Breadcrumb'

// TypeScript interfaces
interface LabTest {
  name: string
  duration: string
  description: string
  includes: string[]
  preparation: string
  popular?: boolean
  confidential?: boolean
}

interface TestCategory {
  id: string
  title: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  description: string
  color: string
}

const testCategories = [
  {
    id: 'routine',
    title: 'Routine Blood Tests',
    icon: TestTube,
    description: 'Essential health screenings for regular monitoring',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'wellness',
    title: 'Wellness & Prevention',
    icon: Heart,
    description: 'Comprehensive health checks and preventive screenings',
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 'specialized',
    title: 'Specialized Testing',
    icon: Beaker,
    description: 'Advanced diagnostics and specialized panels',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 'hormones',
    title: 'Hormone Testing',
    icon: Activity,
    description: 'Comprehensive hormone panels and endocrine testing',
    color: 'bg-pink-100 text-pink-600'
  },
  {
    id: 'infectious',
    title: 'Infectious Disease',
    icon: Shield,
    description: 'STD testing and infectious disease screening',
    color: 'bg-red-100 text-red-600'
  },
  {
    id: 'fertility',
    title: 'Fertility Testing',
    icon: Users,
    description: 'Fertility assessments and reproductive health',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    id: 'genetic',
    title: 'Genetic Testing',
    icon: Search,
    description: 'DNA analysis and genetic predisposition screening',
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    id: 'microbiome',
    title: 'Microbiome Testing',
    icon: Droplets,
    description: 'Gut health and microbiome analysis',
    color: 'bg-teal-100 text-teal-600'
  },
  {
    id: 'homeblood',
    title: 'Home Blood Test Packages',
    icon: Home,
    description: 'Convenient home blood test packages with comprehensive panels',
    color: 'bg-orange-100 text-orange-600'
  }
]

const labTests: Record<string, LabTest[]> = {
  routine: [
    {
      name: 'Complete Blood Count (CBC)',
      duration: '4-6 hours',
      description: 'Comprehensive blood cell analysis including red blood cells, white blood cells, and platelets',
      includes: ['Red blood cell count', 'White blood cell count', 'Hemoglobin levels', 'Hematocrit', 'Platelet count', 'Blood cell morphology'],
      preparation: 'No fasting required',
      popular: true
    },
    {
      name: 'Basic Metabolic Panel (BMP)',
      duration: '4-6 hours',
      description: 'Essential metabolic markers including glucose, electrolytes, and kidney function',
      includes: ['Glucose', 'Sodium', 'Potassium', 'Chloride', 'BUN', 'Creatinine', 'CO2'],
      preparation: '8-12 hours fasting required'
    },
    {
      name: 'Lipid Profile',
      duration: '4-6 hours',
      description: 'Cholesterol and triglyceride levels for cardiovascular health assessment',
      includes: ['Total cholesterol', 'LDL cholesterol', 'HDL cholesterol', 'Triglycerides', 'Cholesterol ratios'],
      preparation: '12 hours fasting required'
    },
    {
      name: 'Liver Function Test (LFT)',
      duration: '4-6 hours',
      description: 'Comprehensive liver health assessment including enzymes and proteins',
      includes: ['ALT', 'AST', 'Alkaline phosphatase', 'Bilirubin', 'Albumin', 'Total protein'],
      preparation: 'No fasting required'
    },
    {
      name: 'Kidney Function Test',
      duration: '4-6 hours',
      description: 'Assessment of kidney health and filtration capacity',
      includes: ['Creatinine', 'BUN', 'Uric acid', 'eGFR calculation', 'BUN/Creatinine ratio'],
      preparation: 'No fasting required'
    },
    {
      name: 'HbA1c (Diabetes Control)',
      duration: '4-6 hours',
      description: '3-month average blood sugar control for diabetes monitoring',
      includes: ['Glycated hemoglobin percentage', 'Average glucose correlation', 'Diabetes risk assessment'],
      preparation: 'No fasting required'
    }
  ],
  wellness: [
    {
      name: 'Comprehensive Wellness Panel',
      duration: 'Same day',
      description: 'Complete health screening with 40+ biomarkers and smart report',
      includes: ['CBC', 'Metabolic panel', 'Lipid profile', 'Liver function', 'Kidney function', 'Thyroid function', 'Vitamins D & B12', 'Inflammatory markers', 'Smart digital report'],
      preparation: '12 hours fasting required',
      popular: true
    },
    {
      name: 'Executive Health Checkup',
      duration: 'Same day',
      description: 'Premium health assessment for busy professionals',
      includes: ['All wellness panel tests', 'Cardiac markers', 'Tumor markers screening', 'Advanced nutrition panel', 'Stress hormones', 'Detailed consultation'],
      preparation: '12 hours fasting required'
    },
    {
      name: 'Vitamin Panel',
      duration: '24 hours',
      description: 'Essential vitamin levels including D, B12, and folate',
      includes: ['Vitamin D (25-OH)', 'Vitamin B12', 'Folate', 'Vitamin deficiency assessment'],
      preparation: 'No fasting required'
    },
    {
      name: 'Inflammation Markers',
      duration: '4-6 hours',
      description: 'Inflammatory markers for general health assessment',
      includes: ['C-reactive protein (CRP)', 'ESR', 'Inflammatory assessment'],
      preparation: 'No fasting required'
    },
    {
      name: 'Iron Studies',
      duration: '4-6 hours',
      description: 'Complete iron metabolism and anemia screening',
      includes: ['Serum iron', 'TIBC', 'Transferrin saturation', 'Ferritin', 'Anemia evaluation'],
      preparation: 'Morning collection preferred'
    }
  ],
  specialized: [
    {
      name: 'Cardiac Risk Assessment',
      duration: '6-8 hours',
      description: 'Comprehensive cardiovascular risk evaluation',
      includes: ['Lipid profile', 'CRP-hs', 'Homocysteine', 'Lipoprotein(a)', 'Cardiac risk calculation'],
      preparation: '12 hours fasting required'
    },
    {
      name: 'Tumor Markers Screening',
      duration: '24 hours',
      description: 'Cancer screening markers for early detection',
      includes: ['PSA (men)', 'CA 125 (women)', 'CEA', 'AFP', 'CA 19-9'],
      preparation: 'No fasting required'
    },
    {
      name: 'Allergy Panel (Common)',
      duration: '3-5 days',
      description: 'Testing for 20 common environmental and food allergens',
      includes: ['Environmental allergens', 'Food allergens', 'IgE specific testing', 'Allergy interpretation'],
      preparation: 'No fasting required'
    },
    {
      name: 'Autoimmune Panel',
      duration: '5-7 days',
      description: 'Comprehensive autoimmune disease screening',
      includes: ['ANA', 'Anti-dsDNA', 'Rheumatoid factor', 'Anti-CCP', 'Complement levels'],
      preparation: 'No fasting required'
    }
  ],
  hormones: [
    {
      name: 'Thyroid Function Complete',
      duration: '4-6 hours',
      description: 'Comprehensive thyroid health assessment',
      includes: ['TSH', 'Free T3', 'Free T4', 'Thyroid antibodies (TPO)', 'Thyroid function evaluation'],
      preparation: 'Morning collection preferred'
    },
    {
      name: 'Male Hormone Panel',
      duration: '6-8 hours',
      description: 'Complete male hormonal health assessment',
      includes: ['Total testosterone', 'Free testosterone', 'SHBG', 'LH', 'FSH', 'Prolactin'],
      preparation: 'Morning collection (7-10 AM)',
      popular: true
    },
    {
      name: 'Female Hormone Panel',
      duration: '6-8 hours',
      description: 'Comprehensive female hormonal evaluation',
      includes: ['Estradiol', 'Progesterone', 'LH', 'FSH', 'Prolactin', 'DHEA-S'],
      preparation: 'Specific cycle day may be required'
    },
    {
      name: 'PCOS Panel',
      duration: '6-8 hours',
      description: 'Specialized testing for polycystic ovary syndrome',
      includes: ['Testosterone', 'DHEA-S', 'LH/FSH ratio', 'Insulin', 'Glucose tolerance', 'Lipid profile'],
      preparation: '12 hours fasting required'
    },
    {
      name: 'Menopause Panel',
      duration: '6-8 hours',
      description: 'Hormonal assessment for menopausal transition',
      includes: ['FSH', 'LH', 'Estradiol', 'Progesterone', 'Testosterone', 'Menopause evaluation'],
      preparation: 'No fasting required'
    }
  ],
  infectious: [
    {
      name: 'STD Panel (Comprehensive)',
      duration: '24-48 hours',
      description: 'Complete confidential STD screening panel',
      includes: ['HIV 1&2', 'Hepatitis B & C', 'Syphilis', 'Chlamydia', 'Gonorrhea', 'Herpes 1&2'],
      preparation: 'No fasting required',
      confidential: true,
      popular: true
    },
    {
      name: 'HIV Testing',
      duration: '24 hours',
      description: 'Confidential HIV 1&2 antibody and antigen testing',
      includes: ['HIV 1&2 antibodies', 'HIV p24 antigen', 'Confidential results'],
      preparation: 'No fasting required',
      confidential: true
    },
    {
      name: 'Hepatitis Panel',
      duration: '24 hours',
      description: 'Comprehensive hepatitis A, B, and C screening',
      includes: ['Hepatitis A antibodies', 'Hepatitis B surface antigen', 'Hepatitis C antibodies', 'Vaccination status'],
      preparation: 'No fasting required'
    },
    {
      name: 'Travel Health Panel',
      duration: '24 hours',
      description: 'Pre-travel health screening and infectious disease testing',
      includes: ['Hepatitis A & B', 'Typhoid', 'Yellow fever immunity', 'Travel consultation'],
      preparation: 'No fasting required'
    }
  ],
  fertility: [
    {
      name: 'Semen Analysis',
      duration: '24-48 hours',
      description: 'Complete male fertility assessment with detailed sperm analysis',
      includes: ['Sperm count', 'Motility', 'Morphology', 'Volume', 'pH', 'Vitality', 'WHO standards'],
      preparation: '2-5 days abstinence required',
      popular: true
    },
    {
      name: 'Female Fertility Panel',
      duration: '6-8 hours',
      description: 'Comprehensive female fertility hormone assessment',
      includes: ['AMH', 'FSH', 'LH', 'Estradiol', 'Progesterone', 'Prolactin', 'TSH'],
      preparation: 'Specific cycle day (Day 2-3 for some tests)'
    },
    {
      name: 'Ovulation Monitoring',
      duration: '4-6 hours',
      description: 'Hormonal monitoring for ovulation tracking',
      includes: ['LH', 'Progesterone', 'Estradiol', 'Ovulation prediction'],
      preparation: 'Multiple tests may be required'
    },
    {
      name: 'Pregnancy Panel',
      duration: '4-6 hours',
      description: 'Comprehensive pregnancy health assessment',
      includes: ['Beta hCG', 'Complete blood count', 'Blood group & Rh', 'Glucose', 'Urine analysis'],
      preparation: 'First morning urine preferred'
    }
  ],
  genetic: [
    {
      name: 'Hereditary Cancer Risk Panel',
      duration: '2-3 weeks',
      description: 'Comprehensive genetic screening for hereditary cancer predisposition',
      includes: ['BRCA1/BRCA2 genes', 'Lynch syndrome markers', 'Hereditary breast/ovarian cancer', 'Colorectal cancer genes', 'Genetic counseling included'],
      preparation: 'Simple saliva or blood sample',
      popular: true
    },
    {
      name: 'Pharmacogenomics Testing',
      duration: '1-2 weeks',
      description: 'Personalized medication response analysis based on genetic profile',
      includes: ['Drug metabolism genes', 'Medication sensitivity analysis', 'Dosage optimization', 'Adverse reaction risk', 'Personalized drug report'],
      preparation: 'Simple saliva or blood sample'
    },
    {
      name: 'Carrier Screening Panel',
      duration: '2-3 weeks',
      description: 'Genetic carrier status for inherited conditions',
      includes: ['Cystic fibrosis', 'Sickle cell disease', 'Thalassemia', 'Spinal muscular atrophy', '100+ genetic conditions'],
      preparation: 'Simple saliva or blood sample'
    },
    {
      name: 'Cardiovascular Genetic Risk',
      duration: '2-3 weeks',
      description: 'Genetic predisposition to heart disease and related conditions',
      includes: ['Familial hypercholesterolemia', 'Cardiomyopathy genes', 'Arrhythmia risk factors', 'Blood clotting disorders', 'Lifestyle recommendations'],
      preparation: 'Simple saliva or blood sample'
    },
    {
      name: 'Nutrigenomics Testing',
      duration: '1-2 weeks',
      description: 'Genetic-based nutrition and lifestyle optimization',
      includes: ['Vitamin metabolism', 'Food sensitivities', 'Exercise response', 'Weight management genes', 'Personalized nutrition plan'],
      preparation: 'Simple saliva sample'
    }
  ],
  microbiome: [
    {
      name: 'Comprehensive Gut Microbiome',
      duration: '2-3 weeks',
      description: 'Complete gut microbiome analysis for digestive health optimization',
      includes: ['Bacterial diversity analysis', 'Beneficial bacteria levels', 'Pathogenic bacteria detection', 'Digestive function markers', 'Personalized probiotic recommendations'],
      preparation: 'Stool sample collection kit provided',
      popular: true
    },
    {
      name: 'Digestive Health Panel',
      duration: '1-2 weeks',
      description: 'Comprehensive digestive system analysis',
      includes: ['Microbiome diversity', 'Inflammatory markers', 'Digestive enzymes', 'Intestinal permeability', 'Food sensitivity indicators'],
      preparation: 'Stool sample collection kit provided'
    },
    {
      name: 'IBS & SIBO Analysis',
      duration: '2-3 weeks',
      description: 'Specialized testing for irritable bowel syndrome and small intestinal bacterial overgrowth',
      includes: ['SIBO bacterial markers', 'IBS-related microbes', 'Inflammation indicators', 'Digestive function assessment', 'Treatment recommendations'],
      preparation: 'Stool sample and breath test if required'
    },
    {
      name: 'Immune-Microbiome Connection',
      duration: '2-3 weeks',
      description: 'Analysis of gut microbiome impact on immune system function',
      includes: ['Immune-modulating bacteria', 'Autoimmune risk markers', 'Inflammatory response', 'Allergy-related microbes', 'Immune optimization plan'],
      preparation: 'Stool sample collection kit provided'
    },
    {
      name: 'Weight Management Microbiome',
      duration: '2-3 weeks',
      description: 'Microbiome analysis focused on metabolism and weight management',
      includes: ['Metabolism-related bacteria', 'Short-chain fatty acid production', 'Calorie extraction efficiency', 'Weight management microbes', 'Dietary recommendations'],
      preparation: 'Stool sample collection kit provided'
    }
  ],
  homeblood: [
    {
      name: 'Essential Home Health Panel',
      duration: 'Same day',
      description: 'Complete basic health screening performed in the comfort of your home',
      includes: ['Complete blood count', 'Basic metabolic panel', 'Lipid profile', 'Liver function', 'Kidney function', 'Thyroid function (TSH)'],
      preparation: '12 hours fasting required',
      popular: true
    },
    {
      name: 'Executive Home Health Package',
      duration: 'Same day',
      description: 'Comprehensive executive health screening with home blood collection',
      includes: ['All essential panel tests', 'Cardiac markers', 'Diabetes screening', 'Vitamin D & B12', 'Inflammatory markers', 'Tumor markers'],
      preparation: '12 hours fasting required'
    },
    {
      name: 'Women\'s Home Health Panel',
      duration: 'Same day',
      description: 'Specialized health panel for women with home collection service',
      includes: ['Complete blood count', 'Hormone panel', 'Thyroid function', 'Iron studies', 'Vitamin levels', 'Bone health markers'],
      preparation: 'Specific cycle day may be required for hormones'
    },
    {
      name: 'Men\'s Home Health Panel',
      duration: 'Same day',
      description: 'Comprehensive health screening tailored for men with home service',
      includes: ['Complete blood count', 'Testosterone levels', 'PSA screening', 'Lipid profile', 'Liver function', 'Kidney function'],
      preparation: 'Morning collection preferred for hormones'
    },
    {
      name: 'Senior Home Health Package',
      duration: 'Same day',
      description: 'Comprehensive health panel designed for seniors with convenient home collection',
      includes: ['Complete blood count', 'Comprehensive metabolic panel', 'Cardiac risk markers', 'Diabetes monitoring', 'Kidney function', 'Bone health'],
      preparation: '12 hours fasting required'
    },
    {
      name: 'Chronic Disease Monitoring',
      duration: 'Same day',
      description: 'Regular monitoring panel for chronic conditions with home convenience',
      includes: ['HbA1c', 'Lipid profile', 'Kidney function', 'Liver function', 'Blood pressure monitoring', 'Medication level monitoring'],
      preparation: 'No fasting required for most tests'
    }
  ]
}

const homeCollectionFeatures = [
  {
    icon: Home,
    title: 'Home Blood Collection',
    description: 'Professional phlebotomist visits your home or hotel for blood sample collection'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Blood collection services available around the clock across Dubai'
  },
  {
    icon: Shield,
    title: 'Safety & Hygiene',
    description: 'Sterile equipment, professional protocols, and complete safety measures'
  },
  {
    icon: Zap,
    title: 'Same Clinic Results',
    description: 'Identical turnaround times and quality as in-clinic sample collection'
  }
]

export default function LaboratoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary text-white">Laboratory Services</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Laboratory Tests & Home Blood Collection in Dubai
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive laboratory testing with same-day results. Professional blood collection
              available at our clinic or in the comfort of your home/hotel across Dubai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp for Lab Tests
                </Button>
              </a>
              <Link href="/book">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Lab Test
                </Button>
              </Link>
              <a href="tel:+97145703423">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Clinic
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="bg-white py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={BreadcrumbConfigs.services.laboratory} />
        </div>
      </section>

      {/* Test Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Laboratory Test Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of laboratory tests organized by category for easy selection.
              All tests available with same-day results and home collection options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testCategories.map((category, index) => (
              <Card key={index} className="clinical-card hover:scale-[1.02] transition-transform duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {category.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {category.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {labTests[category.id as keyof typeof labTests].length} tests available
                    </span>
                    <a href={`#${category.id}`} className="text-primary hover:text-primary/80 font-medium text-sm">
                      View Tests →
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Home Collection Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Home Blood Collection & Testing Service
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional blood sample collection at your home, office, or hotel anywhere in Dubai.
              Choose from individual tests or convenient home test packages with same quality results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeCollectionFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-3xl mx-auto">
              <h3 className="font-semibold text-blue-900 mb-3">Home Collection Service Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-800">
                <div>
                  <h4 className="font-medium mb-2">Individual Tests</h4>
                  <p className="text-sm mb-1"><strong>Same-day service:</strong> Any test from our menu</p>
                  <p className="text-sm mb-1"><strong>Next-day service:</strong> Standard home collection</p>
                  <p className="text-sm"><strong>Emergency collection:</strong> Available within 2 hours</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Home Test Packages</h4>
                  <p className="text-sm mb-1"><strong>Essential Panel:</strong> Basic health screening</p>
                  <p className="text-sm mb-1"><strong>Executive Package:</strong> Comprehensive health</p>
                  <p className="text-sm"><strong>Specialized Panels:</strong> Men's, Women's, Senior health</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-blue-700"><strong>Contact us for pricing information and scheduling</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* Test Listings by Category */}
      {Object.entries(labTests).map(([categoryId, tests]) => {
        const category = testCategories.find(cat => cat.id === categoryId)
        return (
          <section key={categoryId} id={categoryId} className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-12 h-12 ${category?.color} rounded-lg flex items-center justify-center mr-3`}>
                    {category?.icon && <category.icon className="w-6 h-6" />}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {category?.title}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {category?.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {tests.map((test, index) => (
                  <Card key={index} className={`clinical-card h-full ${test?.popular ? 'ring-2 ring-primary' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">
                              {test.name}
                            </h3>
                            {test?.popular && (
                              <Badge className="bg-primary text-white text-xs">Popular</Badge>
                            )}
                            {test?.confidential && (
                              <Badge className="bg-red-600 text-white text-xs">Confidential</Badge>
                            )}
                          </div>

                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{test.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {test.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {test.includes.slice(0, 4).map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{item}</span>
                            </div>
                          ))}
                          {test.includes.length > 4 && (
                            <div className="text-xs text-gray-500 mt-1">
                              +{test.includes.length - 4} more parameters
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-start space-x-2">
                          <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-sm font-medium text-gray-900">Preparation: </span>
                            <span className="text-sm text-gray-600">{test.preparation}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            WhatsApp for Info & Booking
                          </Button>
                        </a>
                        <div className="grid grid-cols-2 gap-2">
                          <Link href="/book">
                            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white text-sm">
                              <TestTube className="w-4 h-4 mr-1" />
                              Clinic
                            </Button>
                          </Link>
                          <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm">
                              <Home className="w-4 h-4 mr-1" />
                              Home
                            </Button>
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Laboratory Testing FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our laboratory services and testing procedures.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="clinical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How quickly can I get my lab results?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most routine blood tests have same-day results (4-8 hours). Specialized tests may take 24-48 hours.
                  We provide digital reports via WhatsApp or email for immediate access to your results.
                </p>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do I need to fast before blood tests?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Fasting requirements vary by test. Glucose and lipid profiles typically require 8-12 hours of fasting.
                  We'll provide specific preparation instructions when you book your test.
                </p>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Is home blood collection safe and accurate?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, our certified phlebotomists use the same sterile equipment and protocols as in-clinic collection.
                  Samples are transported under proper conditions, ensuring identical accuracy and turnaround times.
                </p>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Are STD tests completely confidential?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Absolutely. We guarantee 100% confidentiality for all STD testing. Results are shared only with you
                  through secure channels, and we maintain the highest privacy standards throughout the process.
                </p>
              </CardContent>
            </Card>

            <Card className="clinical-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can I book multiple tests together?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, multiple tests can be performed from a single blood draw when compatible. Our wellness panels
                  combine the most commonly requested tests for convenience and better value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Lab Tests?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Professional laboratory testing with same-day results. Available at our clinic
            or with convenient home collection service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/971523011150" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp to Book Tests
              </Button>
            </a>
            <Link href="/book">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Calendar className="w-5 h-5 mr-2" />
                Book Lab Appointment
              </Button>
            </Link>
            <a href="tel:+97145703423">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Phone className="w-5 h-5 mr-2" />
                Call for Home Collection
              </Button>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Same-day results</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Home className="w-4 h-4" />
              <span>24/7 home collection</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>100% confidential</span>
            </div>
          </div>
        </div>
      </section>

      <MobileCTABar />
    </div>
  )
}

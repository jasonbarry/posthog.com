import React from 'react'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import './index.css'
import { Link } from 'gatsby'
import landingPageBackground from '../images/landing-page-background.svg'
import computerDashboard4 from '../images/computer-dashboard-4.svg'
import autocapture1 from '../images/autocapture-1.svg'
import background23 from '../images/background-2-3.svg'
import improveRetention from '../images/improve-retention.svg'
import improvePaths from '../images/improve-paths.svg'
import improveFunnels from '../images/improve-funnels.svg'
import background5 from '../images/background-5.svg'
import enterprise01 from '../images/enterprise-01.svg'
import enterprise02 from '../images/enterprise-02.svg'
import enterprise03 from '../images/enterprise-03.svg'
import selfHost from '../images/self-host.svg'
import installNowFree1 from '../images/install-now-free-1.svg'
import shelf4 from '../images/shelf-4.svg'
import shelf2 from '../images/shelf-2.svg'
import stackAndroid from '../images/stack-android.svg'
import stackPython from '../images/stack-python.svg'
import stackIos from '../images/stack-ios.svg'
import stackNode from '../images/stack-node.svg'
import stackPhp from '../images/stack-php.svg'
import stackRuby from '../images/stack-ruby.svg'
import stackGatsby from '../images/stack-gatsby.svg'
import stackJavascript from '../images/stack-javascript.svg'
import stackGo from '../images/stack-go.svg'
import stackApi from '../images/stack-api.svg'
import installHeroku from '../images/install-heroku.svg'
import installDocker from '../images/install-docker.svg'
import installAws from '../images/install-aws.svg'
import installKubernetes from '../images/install-kubernetes.svg'
import joinCommunity from '../images/join-community.svg'
import githubButton1 from '../images/github-button-1.svg'
import slackButton1 from '../images/slack-button-1.svg'
import roadmapButton1 from '../images/roadmap-button-1.svg'
import whatsNew from '../images/whats-new.svg'
import { Row, Col } from 'antd'
import SEO from '../components/seo'
import Layout from '../components/Layout'


function IndexPage() {
  return (
    <div className="indexContainer" style={{backgroundImage: `url(${landingPageBackground})`}}>
    <Layout containerStyle={{maxWidth: "auto", padding: 0}} >
      <SEO
        title="PostHog - open source product analytics"
        description="Understand your users. Build a better product"
      />
      <Row>
        <Col span={22} offset={2}>
          <h1>A complete product analytics stack, <br/>ready to deploy on your infrastructure.</h1>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={2}>
          <p>Join 1,000 companies using PostHog.</p>      
          <a href="/trial">
            <Button
              type="primary"
              size="large"
              icon="right-circle"
            >
              Get Started for Free
            </Button>
          </a>
          {' '}
          <a href="/request_demo">
            <Button type="secondary" size="large" style={{align: 'right'}}>
              Request Demo
            </Button>
          </a>
          <div className="understandUsers">
            <h3 align="top">
              Understand your users.
              <br />
              Build a better product.
            </h3>
            <hr className="blueLine"/>
            <p className="understandUsersText">Capture, store and visualize your product data all on your own infrastructure.</p>
            <p className="understandUsersText">Eliminate the need for a complex pipeline, data lake and visualization tools.</p>
          </div>
        </Col>
        <Col span={14}>
          <img alt="computer-dashboard-4" loading="lazy" src={computerDashboard4} style={{width: '100%'}}/>
        </Col>
      </Row>
      <Row className="openSource">
        <Col span={20} offset={2}>
          <h2 className="gosha">Open source product analytics</h2>
        </Col>
      </Row>

      {/*01 - It all starts with event autocapture*/}
      <div className="autocaptureWrapper" style={{backgroundImage: `url(${autocapture1})`}}>
            <Row justify="space-between" className="autocapture">
              <Col span={3} offset={13}>
                <h1 className="yellowText">01</h1>
              </Col>
              <Col span={7}>
                <h2 className="gosha">It all starts with event autocapture</h2>
                <br/>
                <hr className="yellowLine"/>
                <br/>
                <p>PostHog autocaptures events and user behavior in your mobile or web app.</p>
              </Col>
          </Row>
      </div>

      <div className="trafficVisualWrapper" style={{backgroundImage: `url(${background23})`}}>
        {/*02 - Understand how traffic really flows through your app*/}
        <Row justify="space-between" className="traffic">
          <Col span={3} offset={1}>
            <h1 className="redText">02</h1>
          </Col>
          <Col span={11}>
            <h2 className="gosha">Understand how traffic really flows through your app</h2>
            <br/>
            <hr className="redLine"/>
            <br/>
            <p className="trafficText">PostHog autocaptures events and user behavior in your mobile or web app.</p>
          </Col>
        </Row>

        {/*03 - Understand how traffic really flows through your app*/}
        <Row justify="space-between" className="visualize">
          <Col span={3} offset={13}>
            <h1 className="blueText">03</h1>
          </Col>
          <Col span={8}>
            <h2 className="gosha">Visualize product trends and retention</h2>
            <hr className="blueLine"/>
            <p>Powerful analytics to really understand what your users are doing and how to keep them coming back.</p>
          </Col>
        </Row>
      </div>
      
      

      {/*04 - Improve conversion rates*/}
      <div className="improveConversion">
        <Row>
          <Col span={3} offset={6}>
            <h1 className="yellowText">04</h1>
          </Col>
          <Col span={10}>
            <h2 className="gosha">Improve conversion rates</h2>
            <hr className="yellowLine"/>
            <p>Visualize how users navigate through your app or website, and use metrics to understand what needs improvement.</p>
          </Col>
        </Row>
        <Row justify="space-between" className="improveConversion">
          <Col span={4} offset={3} align="center">
            <img alt="improve-retention" loading="lazy" src={improveRetention}/>
            <br/>
            <h4>Retention</h4>
          </Col>
          <Col span={4} offset={3} align="center">
            <img alt="improve-paths" loading="lazy" src={improvePaths}/>
            <br/>
            <h4>Paths</h4>
          </Col>
          <Col span={4} offset={3} align="center">
            <img alt="improve-funnels" loading="lazy" src={improveFunnels}/>
            <br/>
            <h4>Funnels</h4>
          </Col>
        </Row>
      </div>
      
      {/*05 - Use feature flags to test new ideas*/}
      <div className="featureFlagsWrapper" style={{backgroundImage: `url(${background5})`}}> 
        <Row justify="space-between" className="featureFlags">
          <Col span={3} offset={2}>
            <h1 className="redText">05</h1>
          </Col>
          <Col span={8}>
            <h2 className="gosha">Use feature flags <br/>to test new ideas</h2>
            <hr className="redLine"/>
            <br/>
            <p className="featureFlagsText">Continuously release new features without worrying about breaking changes. Test new ideas quickly and roll out to 10%, 20% or 100% of your users.</p>
          </Col>
        </Row>
      </div>

      {/*Designed for your Stack */}
      <div className="designed4Stack">
      <Row className="gutter-row" justify="center" align="middle">
        <Col span={24} className="gutter-row" justify="center" align="middle">
          <h2 align="middle" className="gosha">
            Designed for your stack
          </h2>
        </Col>
      </Row>
      <div className="yourStack" align="bottom">
        <Row justify="space-between" align="bottom">
          <Col xs={2} sm={2} md={7} lg={7} xl={7}></Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} align="middle">
            <Link to="/docs/integrations/python-integration">
              <img alt="Python" className="imageShow" loading="lazy" src={stackPython} />
            </Link>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} align="middle">
            <Link to="/docs/integrations/php-integration">
              <img alt="PHP" className="imageShow" loading="lazy" src={stackPhp} />
            </Link>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} align="middle">
            <Link to="/docs/integrations/android-integration">
              <img alt="Android" className="imageShow" loading="lazy" src={stackAndroid} />
            </Link>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} align="middle">
            <Link to="/docs/integrations/ios-integration">
              <img alt="iOS" className="imageShow" loading="lazy" src={stackIos} />
            </Link>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} align="middle">
            <Link to="/docs/integrations/node-integration">
              <img alt="Node" className="imageShow" loading="lazy" src={stackNode} />
            </Link>
          </Col>
          <Col xs={2} sm={2} md={7} lg={7} xl={7}></Col>
        </Row>
      </div>
        <Row justify="space-between" align="top">
          <Col xs={0} sm={0} md={6} lg={6} xl={6}></Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <img alt="shelf-2" className="imageShow" loading="lazy" src={shelf2}/>
          </Col>
          <Col xs={0} sm={0} md={6} lg={6} xl={6}></Col>
        </Row>
        <br/>
        <br/>
      <div className="yourStack" align="bottom">
        <Row justify="space-between" align="bottom">
          <Col xs={2} sm={2} md={7} lg={7} xl={7}></Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} align="middle">
            <Link to="/docs/integrations/ruby-integration">
              <img alt="Ruby" className="imageShow" loading="lazy" src={stackRuby} />
            </Link>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} align="middle">
            <Link to="/docs/integrations/gatsby-integration">
              <img alt="Gatsby" className="imageShow" loading="lazy" src={stackGatsby} />
            </Link>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} align="middle">
            <Link to="/docs/integrations/js-integration">
              <img alt="Javascript" className="imageShow" loading="lazy" src={stackJavascript}/>
            </Link>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} align="middle">
            <Link to="/docs/integrations/go-integration">
              <img alt="Go" className="imageShow" loading="lazy" src={stackGo} />
            </Link>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} align="middle">
            <Link to="/docs/integrations/api">
              <img alt="API" className="imageShow" loading="lazy" src={stackApi} />
            </Link>
          </Col>
          <Col xs={2} sm={2} md={7} lg={7} xl={7}></Col>
        </Row>
      </div>
        <Row justify="space-between" align="top">
          <Col xs={0} sm={0} md={6} lg={6} xl={6}></Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <img alt="shelf-4" className="imageShow" loading="lazy" src={shelf4}/>
          </Col>
          <Col xs={0} sm={0} md={6} lg={6} xl={6}></Col>
        </Row>
    </div>

    {/* posthog for enterprise */}
    
      <Row>
        <Col span={24} align="middle">
          <h2 className="gosha">PostHog for Enterprise</h2>
          <br/>
        </Col>
      </Row>
      <div className="posthog4Enterprise" style={{backgroundImage: `url(${landingPageBackground})`}}>
      <Row>
        <Col xs={24} sm={24} md={4} lg={4} xl={4} offset={3}>
          <Row>
            <Col xs={9} sm={9} md={24} lg={24} xl={24}>
              <img alt="enterprise-01" loading="lazy" src={enterprise01} className="imageShow"/>
              <br/>
              <br/>
            </Col>
            <Col xs={1} sm={1} md={0} lg={0} xl={0}></Col>
            <Col xs={14} sm={14} md={24} lg={24} xl={24}>
            <h4>Self-managed</h4>
            <br/>
            <hr className="blueLine2"/>
            <p>
              PostHog can be deployed in your cloud, for painless adoption and
              onboarding.
            </p>
            <br/>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={4} lg={4} xl={4} offset={3}>
          <Row>
            <Col xs={9} sm={9} md={24} lg={24} xl={24}>
              <img alt="enterprise-02" loading="lazy" src={enterprise02} className="imageShow"/>
              <br/>
              <br/>
            </Col>
            <Col xs={1} sm={1} md={0} lg={0} xl={0}></Col>
            <Col xs={14} sm={14} md={24} lg={24} xl={24} style={{padding: '0 6%'}}>
              <h4>Unlimited volume</h4>
              <br/>
              <hr className="redLine2"/>
              <p>
                PostHog is built to scale. That includes our open core pricing
                model.
              </p>
              <br/>
            </Col>
          </Row>`
        </Col>
        <Col xs={24} sm={24} md={4} lg={4} xl={4} offset={3}>
          <Row>
            <Col xs={9} sm={9} md={24} lg={24} xl={24}>
              <img alt="enterprise-03" loading="lazy" src={enterprise03} className="imageShow"/>
              <br/>
              <br/>
            </Col>
            <Col xs={1} sm={1} md={0} lg={0} xl={0}></Col>
            <Col xs={14} sm={14} md={24} lg={24} xl={24} style={{padding: '0 6%'}}>
              <h4>Support</h4>
              <br/>
              <hr className="yellowLine2"/>
              <p>
                PostHog can manage your deployment on your infrastructure. All the
                benefits of self-hosting with the reliability and scalability of the
                cloud.
              </p>
            </Col>
          </Row>`
        </Col>
      </Row>
    </div>

      {/* self-hosted full data*/}
      <Row className="selfHostedData">
        <Col span={8} offset={4}>
          <h2 className="gosha">Self host available, <br/> with full underlying data access</h2>
          <br/>
          <hr className="blueLine"/>
        </Col>
        <Col span={10} offset={2} align="right">
          <img alt="self-host" loading="lazy" src={selfHost}/>
        </Col>
      </Row>

      {/* Install now, free*/}
      <div className="installNow" style={{backgroundImage: `url(${landingPageBackground})`}}>
        <Row>
          <Col span={24} align="center">
          <h2 className="gosha">Install now, free</h2>
          </Col>
        </Row>
        <Row>
          <div className="installNowImg">
            <Col span={3} offset={3} align="center">
              <Link to="/docs/deployment">
                <div className="heroku">
                  <img
                    alt="Deploy on Heroku"
                    src={installHeroku}
                  />
                </div>
              </Link>
            </Col>
            <Col span={3} offset={2}> 
              <Link to="/docs/deployment#docker">
                <div className="docker">
                  <img
                    alt="Deploy on Docker"
                    src={installDocker}
                  />
                </div>
              </Link>
            </Col>
            <Col span={3} offset={2}>
              <Link to="docs/deployment#aws-ecs-fargate">
                <div className="aws">
                  <img
                    alt="Deploy on AWS"
                    src={installAws}
                  />
                </div>
              </Link>
            </Col>
            <Col span={3} offset={2}>
              <Link to="docs/deployment#helm-charts-and-kubernetes">
                <div className="kubernetes">
                  <img
                    alt="Deploy on Kubernetes"
                    src={installKubernetes}
                  />
                </div>
              </Link>
            </Col>

          </div>
        </Row>
        <Row className="installNowShelf">
          <Col span={18} offset={3}>
            <img alt="shelf-2" loading="lazy" src={shelf2} className="imageShow"/>
          </Col>
        </Row>
      </div>

      {/*join the community*/}

      <div className="joinCommunityWrapper" style={{backgroundImage: `url(${joinCommunity})`}}>
        <Row>
          <Col span={24}>
            <div>
              <a href="https://github.com/posthog/posthog">
                <div className="github">github</div>
              </a>
              <a href="https://join.slack.com/t/posthogusers/shared_invite/enQtOTY0MzU5NjAwMDY3LTc2MWQ0OTZlNjhkODk3ZDI3NDVjMDE1YjgxY2I4ZjI4MzJhZmVmNjJkN2NmMGJmMzc2N2U3Yjc3ZjI5NGFlZDQ">
                <div className="slack">slack</div>
              </a>
              <Link to="/handbook/strategy/roadmap">
                <div className="roadmap">roadmap</div>
              </Link>
              <div className="yellowFiller"/>
            </div>
          </Col>

        </Row>
      </div>


{/*
      <Row>
        <Col span={24} className="header-row" align="middle">
          <h2>Join the community</h2>
        </Col>
      </Row>
      <Row justify="spaceBetween">
      <Col xs={8} sm={8} md={6} lg={6} xl={6}>

        </Col>
        <Col xs={0} sm={0} md={3} lg={3} xl={3}></Col>
        <Col xs={8} sm={8} md={6} lg={6} xl={6}>
          <a href="https://join.slack.com/t/posthogusers/shared_invite/enQtOTY0MzU5NjAwMDY3LTc2MWQ0OTZlNjhkODk3ZDI3NDVjMDE1YjgxY2I4ZjI4MzJhZmVmNjJkN2NmMGJmMzc2N2U3Yjc3ZjI5NGFlZDQ">
            <img alt="Slack" src={slackButton1} loading="lazy" className="hover-shadow imageShow" />
          </a>
        </Col>
        <Col xs={0} sm={0} md={3} lg={3} xl={3}></Col>
        <Col xs={8} sm={8} md={6} lg={6} xl={6}>
          <Link to="/handbook/strategy/roadmap">
            <img alt="RoadMap" src={roadmapButton1} loading="lazy" className="hover-shadow imageShow"/>
          </Link>
        </Col>
</Row>*/}
      <div className="whatsNewWrapper" style={{backgroundImage: `url(${whatsNew})`}}>
      <Row className="whatsNew">
        <Col span={20} offset={4}>
          <h2 className="blueText gosha">What's new?</h2>
          <Link to="blog/the-posthog-array-1-12-0">
            <Button type="secondary" size="large">
              See what's new
            </Button>
          </Link>
          <br/>
          <br/>
          <p>Version 1.12.0</p>
        </Col>
      </Row> 
      </div>
    </Layout>
    </div>
  )
}

export default IndexPage
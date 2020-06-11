export default {
  default: {
    yes: 'Yes',
    no: 'No',
    filter: 'Filter',
    logout: 'Log out',
    start: 'Start',
    submit: 'Submit',
    searching: 'Searching...',
    hints: {
      toRead: 'Move selected to "Read"',
      toMarked: 'Move selected to "Marked"',
      toFavourite: 'Move selected to "Favourite"',
      toSpam: 'Move selected to "Spam"',
      toTrash: 'Move selected to "Trash"',
    },
  },
  containers: {
    layout: {
      newData: 'New Posts',
      totalData: 'Total results',
      logoSignIn:
        "Famm.io - analyze your brand's influence and see where you're losing profit.",
      logoSignUp: "Focus on relevant information from your brand's audience.",
      logoForgot: 'Famm.io – a way to identify relevant content in your niche.',
      logoCreate:
        "Create a project to analyze your brand's social presence. Mention search will start right after the keyword set-up.",
      agree: 'By clicking “Sign in” I agree to Fammio',
      agreeSignUp: 'By clicking “Sign up” I agree to Fammio',
      facebookLogin: 'Continue with Facebook',
      facebookSignUp: 'Sign up with Facebook',
      googleLogin: 'Log in with Google',
      googleSignUp: 'Sign up with Google',
      footer: {
        descr:
          'Try Fammio for efficient monitoring of your daily real-time mentions with high quality data capture.',
        terms: 'Terms and Conditions',
        privacy: 'Privacy Policy',
        copy: 'Copyright © 2020 by Famm.io. All rights reserved.',
        haveQuestions: 'Have any other questions?',
        liveChat: "Don't hesitate to reach us on live chat or on.",
        resources: 'resources',
        features: 'Features',
        pricing: 'Pricing',
        blog: 'Blog',
        faq: 'FAQ',
      },
      main: {
        brandMonitoring: {
          analytics: {
            mentionDynamics: {
              dynamics: 'Mention dynamics',
              mentions: 'mentions',
              likes: 'likes',
              comments: 'comments',
              shares: 'shares',
              views: 'views',
              reach: 'reach',
            },
            mentions: 'Mentions',
            reach: 'Reach',
          },
          filters: {
            unique: 'Show only unique by',
            uniqueInfo:
              'Clean up the results from duplicates based on previously set options',
            sort: 'Sort order',
            sortInfo: 'Sort by new and old mentions first',
            order: 'Order by',
            orderInfo:
              'Order search result by amount of likes, dislikes, comments, shares, and views. Order by Date set by default.',
            dateBy: 'Choose date',
            dateRange: 'Start - End Date',
            none: 'None',
            text: "Mention's Body",
            title: 'Title',
            url: 'Link',
            new: 'Newest Mentions First',
            old: 'Old Mentions First',
            likes: 'Likes',
            dislikes: 'Dislikes',
            views: 'Views',
            comments: 'Comments',
            shares: 'Shares',
            date: 'Date',
            reach: 'Reach',
            exportToCSV: 'Export to CSV',
            downloadingCSV: 'Downloading CSV File...',
            web: 'Web',
            youtube: 'YouTube',
            twitter: 'Twitter',
            facebook: 'Facebook',
            blogs: 'Blogs',
            forums: 'Forums',
            news: 'News',
            instagram: 'Instagram',
            pinterest: 'Pinterest',
            telegram: 'Telegram',
            reddit: 'Reddit',
            contains: 'Contains',
            containsInfo: 'Filter mentions by keyword or phrase.',
            notContains: 'Does not contain',
            notContainsInfo:
              'Exclude mentions from search result by keyword or phrase.',
            languages: 'Language filter',
            languagesInfo: "Choose mentions' preferable language to sort by",
            countries: 'Country',
            countriesInfo: 'Choose mentions’ preferable countries to sort by',
            source: 'Exclude Discusser',
            sourceInfo:
              'Enter Author credentials: first name or nickname and press apply.',
          },
          posts: {
            post: {
              infl: 'Influencer Score',
              share: 'Share this result',
              reach: 'Reach Count',
              likes: 'Likes Count',
              dislikes: 'Dislikes Count',
              comments: 'Comments Count',
              views: 'Views Count',
              shares: 'Shares Count',
              friends: 'Friends Count',
              followers: 'Followers Count',
              subs: 'Subscribers Count',
              favourites: 'Favorites Count',
              bookmark: 'Bookmark your favorite result',
              open: "Open result's source in a new window",
              remove: 'Remove this result',
              shareOn: 'Share on social media',
              emails: 'Share this result by email',
              emailsList: 'Enter emails separated by comma',
              language: 'Language',
            },
          },
          datepicker: {
            lastFullDay: 'Last 24 hours',
            lastWeek: 'Last week',
            lastFifteen: 'Last 15 days',
            thirtyFromCurrent: 'Last 30 days from current date',
            threeMonths: 'Last 3 months',
            custom: 'Custom date',
          },
          getNew: 'Click on New Posts to get fresh results',
          noData: 'No data found',
          totalFor: 'Total results for',
          loading: 'Loading...',
        },
        findContentCreators: {
          tabs: {
            influencers: 'Project influencers',
            addBio: 'Search additional BIO',
          },
          filters: {
            exportToCSV: 'Export Authors to CSV',
            downloadingCSV: 'Downloading Authors CSV File...',
            orderBy: 'Order top authors by',
            email: 'Email',
          },
        },
        analytics: {
          title: 'Project analytics',
          subtitle: 'Toggle projects on the right for more insights',
          manage: {
            projectsUse:
              'Toggle projects and see how they perform against each other',
            projects: 'projects',
            socials: 'social networks',
          },
        },
        topicInfluencers: {
          createTopic: {
            title: 'It’s time to find the biggest influencers in your niche!',
            titleAdd: 'Enter a new topic to search for more influencers',
            subtitle: 'Type in a keyword to start.',
            placeholder: 'Email marketing, sales, games',
          },
          mainPage: {
            search: 'Search by name',
          },
          filters: {
            topic: 'Topic name',
            social: 'Social platform',
            sort: 'Sort by date',
            new: 'Newest first',
            old: 'Oldest first',
          },
          newRes: 'Fresh results',
        },
        projectSelection: {
          projectName: 'Choose a project to analyze',
        },
        settings: {
          settings: 'Settings',
          account: 'Account Settings',
          projects: 'Project Settings',
          integrations: 'Integrations',
          logout: 'Log Out',
          logoutConfirm: 'Are you sure you want to log out?',
          editProject: 'Edit project',
          project: {
            updated: 'Updated project:',
            delete: 'Delete project',
            confirmDelete: 'Are you sure you want to delete this project?',
            noProjects: 'No active projects',
          },
        },
      },
    },
    navigation: {
      brandMonitoring: 'Brand monitoring',
      topicInfluencers: 'Topic influencers',
      findCreators: 'Brand discussers',
      projectAnalytics: 'Analytics',
    },
    sidebar: {
      title: 'Projects',
      add: 'Add project',
      usedLimits: 'Mentions found',
      maxLimits: 'Current plan limit',
      unlim: 'UNLIMITED',
    },
    projectCreation: {
      onBoarding: {
        welcome:
          'Welcome to a new era for your brand. Fame is right around the corner.',
        subtitle: "Let's get started!",
        brandMonitoring: "Monitor brand's visibility",
        brandMonitoringBody:
          "Research mentions by your brand's keywords. See who generates buzz about your brand online.",
        contentResearch: 'Research content sources',
        contentResearchBody:
          'Analyze performance of content sources in your field to improve brand visibility and reputation.',
        competitorAnal: "Analyze competitors' strategy",
        competitorAnalBody:
          'See where your competitors get published. Polish your content strategy based on competitor research.',
        contentCreators: 'Connect with brand fans',
        contentCreatorsBody:
          'Research brand supporters and content creators in your niche to collaborate easier and grow faster.',
        findTopic: 'Find topic influencers',
        findTopicBody:
          'Search for people who write a lot on the topic you need.',
      },
    },
    landing: {
      thirdAuthError:
        'Authentication Error: This email is already registered on the platform',
    },
    user: {
      updateUser: {
        title: 'Update Your Account Data',
        linkBack: 'Go Back',
      },
      payment: {
        getPackage: 'Log in to get your package',
      },
    },
  },
  filters: {
    favourites: 'Show favorites only',
  },
  forms: {
    log: 'Log into your account',
    next: 'Next',
    finish: 'Finish',
    back: 'Back',
    skip: 'Skip and fill in later',
    create: 'Create',
    signIn: {
      title: 'Log into Fammio',
      subtitle: "Don't have an account?",
      unath: 'Unauthenticated',
      email: 'Email address',
      password: 'Password',
      submit: 'Sign in',
      newAcc: 'Get started',
      resetPass: 'Forgot your password?',
      subtitleVerify: "Haven't confirmed your email yet?",
      verifyOpen: 'Confirm now',
    },
    signUp: {
      title: 'Sign Up',
      subtitle: 'Already have an account?',
      name: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'example@gmail.com',
      password: 'Password',
      submit: 'Sign Up',
      success: 'Account created. Confirmation email has been sent.',
    },
    updatePersonalData: {
      title: 'User information',
      company: 'Company',
      email: 'Email',
      firstName: 'First Name',
      lastName: 'Last Name',
      job: 'Job Title',
      notifications: 'Get web push notifications',
      update: 'Save',
      delete: 'Delete account',
      updatedInformation: 'Your personal information has been updated!',
      updatedPassword: 'Your password has been updated!',
      updatedSocial: 'Your social links have been updated!',
      error: 'Failed to update data.',
    },
    updatePassword: {
      title: 'Password',
      newPassword: 'New password',
      confirmPassword: 'Confirm new password',
      oldPassword: 'Current password',
      update: 'Change password',
      updated: 'Your password has been updated!',
    },
    updateSocial: {
      title: 'Social',
    },
    updateProjects: {
      title: 'Project settings',
      delete: 'Delete project',
    },
    passwordReset: {
      resetTitle: 'Reset password',
      title: 'Forgot your password? ',
      subtitle:
        "Enter your email address below and we'll get you back on track",
      subtitleReset: ' ',
      confirmPassword: 'Confirm new password',
      back: 'Back to Sign In',
      password: 'New password',
      submit: 'Request а password reset link',
      reset: 'Confirm new password',
      success: 'Password has been successfully reset',
      successText: 'Password reset request has been sent',
    },
    emailPrompt: {
      title: 'Enter Your Email',
      email: 'Email',
      submit: 'Send request',
      success: 'Request sent',
      successText:
        'Check your email inbox for the email with the password reset link.',
    },
    resendEmail: {
      title: 'Resend email confirmation letter',
      subtitle:
        'Enter your email address below to send a new email confirmation link',
      submit: 'Resend confirmation link',
      success: 'Confirmation link has been sent',
    },
    emailActivation: {
      successText:
        'Your email has been successfully confirmed! Proceed to Log In with your account.',
      errorText: "Sorry. We couldn't confirm your email address.",
      back: 'Back to Sign Up',
    },
    projectForm: {
      titleUser: 'Enter the data of your',
      titleUserCompany: 'company',
      titleUserOr: 'or',
      titleUserProduct: 'product',
      titleUserMonitor: 'to monitor',
      titleCompetitor: 'Competitors',
      titleCompetitorBold: 'Your competitor',
      titleUserModal: 'Create project',
      subTitle: 'Free forever. No card required upfront.',
      projectName: 'Project name',
      projectNamePlaceholder: 'Type project name',
      projectEx: 'e.g. Fammio Project',
      projectExCompetitor: "e.g. Competitor's Project",
      projectHelp: 'Enter the name of your company or product',
      projectHelpCompetitor:
        "Enter the name of your competitor's company or product",
      brandCategory: 'Brand Category',
      country: 'Country',
      selectPlace: 'Select %{selector} to search in',
      language: 'Language',
      keywords: 'Keywords for tracking',
      keywordsPlaceholder: 'Type keywords separated by commas or enter',
      keywordsEx: 'e.g. fammio, famm.io, famm (Separated by commas or enter)',
      keywordsExCompetitor:
        'e.g. Keyword1, Keyword2, Keyword3 (Separated by commas or enter)',
      keywordsHelp: 'Enter keywords to monitor project-related mentions',
      requiredKeywords: 'Must include keywords',
      excludedKeywords: 'Excluded keywords',
    },
    socialData: {
      title: 'Add social pages that you want to monitor',
      insertLink: 'Paste link here',
    },
    emailShare: {
      success: 'Shared to specified emails',
    },
  },
  billingInfo: {
    title: 'Billing',
    subscription: 'Subscription',
    projects: 'Projects',
    promo:
      "Stay on top! Upgrade now and don't miss a single mention, be it yours or competitor's.",
    next: 'Plan expires on',
    history: 'Payment history',
    plan: 'Plan',
    date: 'Date',
    amount: 'Payment amount',
    noHist: 'No payments',
  },
  plans: {
    free: 'Starter',
    standard: 'Pro',
    upgrade: 'Upgrade',
    update: 'Upgrade plan',
    updatePro: 'Get more mentions',
    wait: 'Wait till the plan quota refreshes next billing month',
    continue: 'Continue with the free plan',
    continueResults:
      'Continue work with collected results (You will not receive fresh updates)',
    continueResultsSingle: 'Continue work with collected results',
    continueResultsOptional: '(You will not receive fresh updates)',
    noUp:
      'Search is disabled, but mentions can be filtered by this source if there are any results',
  },
  paymentModals: {
    reachedLimits: 'You’ve reached the limit',
    reachedText:
      "Wow, looks like you've got more mentions to track than your plan covers!",
    reachedUpgrade:
      'Stay on top of all the social buzz around your brand. Upgrade now to get more mentions and unlock new sources for tracking.',
    freeExpired: 'Go premium to unlock more!',
    freeExpiredTexts: {
      brand: {
        title: 'More keywords for monitoring',
        body:
          "Separate your or competitor's keywords in projects by topics, and compare how they perform against each other.",
      },
      sources: {
        title: 'New sources to cover more mentions',
        body:
          'Manage your online reputation on the most popular platforms: Facebook, Instagram, and Telegram.',
      },
      updated: {
        title: 'Get timely updates',
        body:
          'Always be aware of fresh news and mentions and receive more frequent updates.',
      },
      personal: {
        title: 'Custom setup of your account',
        body:
          'We will personally assist you in launching your project and setting up keywords for monitoring.',
      },
    },
    paidExpired: {
      title: 'Your plan has expired',
      body:
        'It looks like your subscription has ended and wasn’t automatically renewed. Please, choose a plan to continue.',
      footer:
        'Encountered a problem? Contact our Customer Care team and we’ll help you with any issue. ',
      btnPlan: 'Choose a plan',
    },
    subLimits: {
      title: 'Now that’s what we call productivity',
      bodyLooksLike:
        'It looks like you’ve just run out of mentions on your plan!',
      bodyContactTeam:
        'Please contact our Customer Care team if you’d like to upgrade your monthly mentions quota or wait for it to renew next month.',
    },
    downgrade: {
      title: 'You are now using a free plan',
      processing:
        'Something went wrong when processing your payment. You have been automatically switched to a free plan. Please contact our Customer Care for more details.',
      choose:
        'Please choose a payment method to return to your premium subscription or continue with the free plan.',
    },
  },
  tour: {
    welcome: 'Welcome to Fammio!',
    skip: 'Skip it now',
    start: 'Start tour',
    upgrade: 'Upgrade',
    firstBoarding: {
      step1: {
        author:
          'My name is Vova, a Marketing Specialist at Fammio. I’m very excited you joined us. ',
        text1:
          'In the next 14 days of your trial period, I’ll try to help you explore all core platform features. ',
        text2:
          'I’m always here to help if you have any questions. You can always reach me via a chat window or by email ',
        email: 'volodymyr@famm.io',
        text3:
          'There is one simple thing - we can grow only together with you.',
        text4:
          'Share your feedback in widget chat if you have any suggestions or found some issues. It will help us to become better for sure.',
      },
    },
    firstBoardingMonitorBrands: {
      step2: {
        text1:
          'Let me ask you one more question before you start monitoring your brand and spying on competitors.',
        text2: 'Are you sure you created your project correctly?',
        text3:
          'I promise that this 2:55 min video will help you get the most out of Fammio.',
        videoSrc: 'https://www.youtube.com/embed/gJjUNnXb4oI',
      },
    },
    firstBoardingReachWider: {
      step2: {
        text1:
          'Let me ask you one more question before you reach a wider audience and use it lead generation.',
        text2: 'Are you sure you created your project correctly?',
        text3:
          'I promise that this 2:27 min video will help you get the most out of Fammio.',
        videoSrc: 'https://www.youtube.com/embed/r9BOpK5ycC8',
      },
    },
    firstBoardingFindInfluencers: {
      step2: {
        text1:
          'Let me ask you one more question before you start searching for topic influencers.',
        text2: 'Are you sure you created your project correctly?',
        text3:
          'I promise that this 3 min video will help you get the most out of Fammio.',
        videoSrc: 'https://www.youtube.com/embed/Z5EFtsnD2Vw',
      },
    },
    monitorBrands: {
      name: {
        enterFollowing: 'Let’s start with creating your first project!',
        hint: 'Set a project name (e.g. Your brand name). ',
        summarise:
          'Don’t worry! It won’t have any impact on your search results',
      },
      keywords: {
        title: 'Keywords for tracking',
        hint:
          'In this field, you must enter keywords related to your company/product name.',
        body:
          'The right keywords for the Fammio company will be famm.io(company website), fammio(general company name), fammioapp(twitter account name) and so on.',
      },
    },
    reachWider: {
      name: {
        enterFollowing: 'Let’s start with creating your first project!',
        hint: 'Set a project name (e.g. Reach audience). ',
        summarise:
          'Don’t worry! It won’t have any impact on your search results.',
      },
      keywords: {
        title: 'Keywords for tracking',
        hint:
          'In this field, you must enter keywords related to your industry topic.',
        body:
          'Think of the keywords as phrases that people write in their posts. (E.g. email marketing, sales strategies, etc.). Write keywords related to one topic. ',
      },
    },
    findInfluencers: {
      name: {
        enterFollowing: 'Let’s start with creating your first project!',
        hint: 'Set a project name (e.g. Marketing Topic Influencers). ',
        summarise:
          'Don’t worry! It won’t have any impact on your search results.',
      },
      keywords: {
        title: 'Keywords for tracking',
        hint:
          'In this field, you must enter keywords related to topic influencers’ niche.',
        body:
          'Think of the keywords as phrases that influencers write in their posts. For example, enter email marketing, email marketing strategies, email techniques, if you are interested to find email marketing topic influencers.',
      },
    },
    step1: {
      enterFollowing: 'To get started enter the following:',
      enterBrandName: '👉 the brand name of your product',
      enterKeywords:
        '👉 keywords that describe the product for mentions search* ',
      tryDifferentSpelling:
        '*Try different spelling of these keywords. It must be from 1 to N-word phrases that describe your product. ',
      hint: 'Hint: ',
      hintEnter:
        "If you're entering several keywords, press Enter after each one.",
      addKeywords:
        'You can add N keywords to each project. It depends on your package plan.',
      specifyEach:
        'Specify each competitor to find related content, references, and mentions.',
      separateMention:
        'Fammio will create a separate mention monitoring and influencer search dashboard.',
    },
    step2: {
      specifyCompetitor:
        "You can learn and use your competitors' strong and week points by listening to what their clients say on social media. ",
      separateMonitoring:
        "You'll be able to monitor the performance of your and competitor's projects individually or compare them in the Analytics tab.",
    },
    dashboardIntroduction: {
      followTour:
        'Would you like to follow a guided tour of Brand Monitoring and Find Content Creators features? 💡💥',
      skip:
        'If you have no time or already familiar with our service, you can easily skip it now.',
      repeat:
        'You will always be able to relaunch it in your settings at the header 🔅',
      youtubeOnboard: 'As well, you can watch tutorials on',
    },
    dashboardStep1: {
      hurray: 'Hurray 🎉',
      firstResults: 'Here are your first results!',
      results:
        "Can you believe how many important mentions you've almost missed?",
      neverMiss: "You'll never miss a thing again 💪",
      inform:
        'You will receive emails about projects’ new notifications every day 📨',
      itMeans:
        'It means you can reach out to brand fans and customers as soon as they talk about you online.',
    },
    dashboardStep2: {
      menu: 'This is your Brand Monitoring Dashboard',
      placeFor: 'Here you can:',
      placeForMonitoring:
        "✅ monitor your brand mentions and compare them to your competitors';",
      placeForChecking:
        '✅ check and react to your mentions as soon as they appear;',
      placeForLearning:
        "✅ learn about your product's strength and competitors' weaknesses;",
      placeForDefining: '✅ define your best-performing marketing channels;',
    },
    dashboardStep3: {
      newProject:
        'Add a new project and monitor trending topics, brands, and products within it.',
      monitor:
        "You can monitor your own or competitor's brand names or track keywords related" +
        'to your product to see how you perform in the market.',
      recommended: '👉 It is recommended to use 2-3-word phrases for keywords.',
      upgradeMax:
        'You can upgrade your plan to track up to 60 keywords! To do so, click',
      barMenu: 'on the bar menu',
      free: {
        1: '✅ On a free plan, you can add only 1 project and track 3 keywords. ',
        2: 'You can upgrade your plan to create up to 20 projects! To do so, click ',
      },
      essential: '👉 You can add up to 5 projects with 15 keywords.',
      expert: '👉 You can add up to 10 projects with 30 keywords. ',
      enterprise: '👉 You can add up to 20 projects with 60 keywords.',
    },
    dashboardStep4: {
      ableToSee: 'Here you can find your monthly mentions quota.',
      moreLimits:
        "If you'd like to get more mentions and switch to a premium subscription, click",
      limits: '📣 1 mention = 1 social media post or mention on the web.',
      support: "Contact our support team if you'd like to get more mentions.\n",
      free:
        '👉 You currently have a monthly limit of 500 mentions, 1 project, and 3 keywords.',
      essential:
        '👉 You currently have a monthly limit of 15 000 mentions, 5 projects, and 15 keywords.',
      expert:
        '👉 You currently have a monthly limit of 30 000 mentions, 10 projects, and 30 keywords.',
      enterprise:
        '👉You are using our most powerful plan. You have a monthly limit of 100 000 mentions, 20 projects, and 60 keywords.',
    },
    dashboardStep5: {
      editProject:
        'Easily edit project’s properties by clicking on the pencil (✏️) next to its name.',
      statuses:
        "Under the project's name, you can find all 🗃️, non-read ❌, clicked ↖️, marked 🏷, favorite ⭐, moved to trash🗑️ or spam ⛔️ by you mentions.",
    },
    dashboardStep6:
      'Pay attention: Use filters for a detailed analysis of each source ☑️',
    dashboardStep7: {
      1: '📌 Date filter:',
      2: 'Select the dates for which you want to see mentions.',
    },
    dashboardStep8: {
      1: '📌 Filter by key phrase:',
      2: 'Contains and does not contain: write the preferable keyword or phrase you want to include or exclude from your search results.',
    },
    dashboardStep9: {
      1: '📌 Sorting filters:',
      2: 'Exclude source URL: enter domain names that you want to exclude from search.',
    },
    dashboardStep10: {
      1: '📌 Sorting filters:',
      2: 'Sort order: sort by new and old mentions first.',
      3: 'Order by: likes, dislikes, comments, shares, and views.',
      4: 'Show only unique by: clean up the results from duplicates based on previously set options.',
    },
    dashboardStep11: {
      1: '📌 Content filters:',
      2: 'Country: choose mentions’ preferable countries to sort by.',
      3: "Language filter: choose mentions' preferable language to sort by.",
    },
    widget: {
      1: 'If you get stuck setting up your project, then click on a widget in the lower right corner and:',
      2: 'ask for a help 👈',
      3: 'request a ',
      4: '15-min demo',
      5: 'Our Customer Success Managers are always here to help 😎🖐',
    },
    exportCSV: 'You can also download found data in CSV and use it offline 🔥',
    stepMention: {
      oneClick: 'Get new mentions in one click.',
      newMentions:
        'It is proven that brands that provide quick responses online gain brand fans and clients faster.',
      justClick:
        "Just click Get new mentions and they'll load up to your dashboard.",
    },
  },
  errors: {
    client: {
      required: '%{field} required',
      invalidEmail: 'Invalid email address',
      invalidEmailList: 'Invalid email in the list',
      invalidPassword:
        'Password should contain at least 1 upper case letter, 1 number and be more than 8 characters long',
      temporaryEmail: 'Temporary emails are disallowed',
      invalidPasswordLength: 'Your password must be between 6-20 characters',
      confirmPassword: 'Passwords must match',
      checkMaxKeywords: 'Only 3 keywords can be set at a time',
      checkMaxFilters: 'Only 5 filters can be set at a time',
      usedEmail:
        'This email is already in use. Please enter another or contact customer care',
      activeProject: 'At least one project should be active',
      limitProjects: 'Only %{max} active projects are allowed',
      limitKeywords: 'Only %{max} active keywords are allowed',
      noDuplicates: 'Duplicates are disallowed',
      noDuplicateTags: 'Duplicate keywords are disallowed',
      needTopic: 'Enter a topic keyword to start searching',
      maxList: 'Only 3 keywords can be added',
      maxActiveProj: 'Only %{max} projects can be active at one time',
    },
    server: {
      invalidLogin: 'Invalid Email Address or Password',
      manyAttempts: "Too Many Attempts. You've been timed out for 1 minute",
      unique: '%{field} should be unique',
      required: '%{field} is required',
      requiredLog: 'Email and password are required',
      max: 'Max %{field} length is %{length}',
      min: 'Min %{field} length is %{length}',
      expired: 'Your token has expired',
      forbidden: '%{field} is invalid',
      notVerified: "Your email address isn't confirmed",
      notUnique: 'Value in %{field} should be unique',
      notUniqueInEmail:
        'This email is already in use. Please enter another or contact customer care',
      onceAnHour: 'Request can only be sent once an hour',
      notEmail: 'This email address is not valid',
      notString: 'This should be a text value',
      notExists: "This value doesn't exist",
      notInteger: 'This should be a whole number',
      indisposable: 'Disposable emails are disallowed',
      numeric: 'Value should be a number',
      notInList: "Value doesn't exist in this list",
      bannedBlockedDeleted:
        'This account is banned. Please contact customer care for more information.',
      notMatch: "Value doesn't match with a previous one",
      incorrect: '%{field} is incorrect',
      timeGap: 'You can only toggle keywords every 5 minutes',
      unableToDeactivate:
        "You can't deactivate the last keyword in your project",
      invalidFormat: 'Data was provided to the field in an invalid format ',
      user: {
        maxLimits: "You've reached your max mentions count of %{value}",
      },
      emailExists: 'This email is already in use',
    },
  },
  pricing: {
    package: {
      expired: 'expired',
      expiredAt: 'Package expires on ',
      projects: 'projects to monitor',
      mentions: 'mentions per month',
      keywords: 'keyword for tracking',
    },
    plans: {
      free: 'Freemium',
      essential: 'Essential',
      essentialDescription: 'Crafted for solopreneurs and small businesses.',
      expert: 'Expert',
      expertDescription:
        'Suited for medium to large companies with developed social presence.',
      enterprise: 'Enterprise',
      enterpriseDescription: 'Best for enterprise companies and agencies.',
      purchase: 'Purchase',
      monitor: 'Monitor',
      projects: 'projects',
      track: 'Track',
      keywords: 'keywords',
      uncover: 'Uncover',
      mentions: 'mentions',
      monitorBrands: 'Monitor brands',
      searchInfluencers: 'Search influencers',
      trackPerformance: 'Track project performance',
      dataUpdated: 'Data updated',
      customSetup: 'Custom account setup',
      month: 'mo',
      daily: 'daily',
      timesDay: 'times a day',
      current: 'Current plan',
    },
    needHelp: 'Need help',
    talkToExpert: 'Talk to an expert and find the best plan for you.',
    contactUs: 'Contact us',
  },
};

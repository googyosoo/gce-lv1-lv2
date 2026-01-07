
export interface BilingualText {
  en: string;
  ko: string;
}

export interface Question {
  id: number;
  question: BilingualText;
  options: BilingualText[];
  answer: number | number[]; // Index or array of indices
  type: 'single' | 'multiple';
  explanation?: BilingualText;
}

export interface Scenario {
  id: number;
  title: BilingualText;
  description: BilingualText;
  tasks: BilingualText[];
}

export interface StudyTip {
  id: number;
  title: BilingualText;
  content: BilingualText;
  category: string;
}

export const lv1Questions: Question[] = [
  {
    id: 1,
    question: {
      en: "You want to find all emails from your principal that include an attachment. Which search operator should you use in Gmail?",
      ko: "교장 선생님이 보낸 이메일 중 첨부 파일이 있는 메일만 찾고 싶습니다. Gmail에서 어떤 검색 연산자를 사용해야 합니까?"
    },
    options: [
      { en: "from:principal attachment:yes", ko: "from:principal attachment:yes" },
      { en: "sender:principal has:attachment", ko: "sender:principal has:attachment" },
      { en: "from:principal has:attachment", ko: "from:principal has:attachment" },
      { en: "with:attachment from:principal", ko: "with:attachment from:principal" }
    ],
    answer: 2,
    type: 'single',
    explanation: {
      en: "The 'from:' operator specifies the sender, and 'has:attachment' filters for emails with files attached.",
      ko: "'from:' 연산자는 보낸 사람을 지정하고, 'has:attachment'는 파일이 첨부된 이메일을 필터링합니다."
    }
  },
  {
    id: 2,
    question: {
      en: "During a Google Meet session, you want to share a video with sound from a YouTube tab. Which presenting option is best?",
      ko: "Google Meet 세션 중에 YouTube 탭의 동영상을 소리와 함께 공유하고 싶습니다. 어떤 발표 옵션이 가장 좋습니까?"
    },
    options: [
      { en: "Your entire screen", ko: "내 전체 화면" },
      { en: "A window", ko: "창" },
      { en: "A Tab", ko: "탭" },
      { en: "Cast to meeting", ko: "회의로 전송" }
    ],
    answer: 2,
    type: 'single',
    explanation: {
      en: "'A Tab' is the best option for sharing high-quality video and audio from a browser tab.",
      ko: "'탭' 옵션은 브라우저 탭에서 고화질 비디오와 오디오를 공유할 때 가장 적합합니다."
    }
  },
  {
    id: 3,
    question: {
      en: "You are creating a site for your class. You want to embed a folder of resources from Google Drive so students can see all files. What should you do?",
      ko: "학급 사이트를 만들고 있습니다. 학생들이 모든 파일을 볼 수 있도록 Google 드라이브 리소스 폴더를 삽입하려고 합니다. 어떻게 해야 합니까?"
    },
    options: [
      { en: "Copy the link of each file and paste it on the site.", ko: "각 파일의 링크를 복사하여 사이트에 붙여넣습니다." },
      { en: "Use the 'Embed' button and select the Drive folder.", ko: "'삽입' 버튼을 사용하여 드라이브 폴더를 선택합니다." },
      { en: "Take a screenshot of the folder.", ko: "폴더의 스크린샷 캡처를 사용합니다." },
      { en: "You cannot embed folders, only individual files.", ko: "개별 파일만 삽입할 수 있으며 폴더는 삽입할 수 없습니다." }
    ],
    answer: 1,
    type: 'single'
  },
  {
    id: 4,
    question: {
      en: "Which of the following are benefits of using Google Classroom for assignments? (Select all that apply)",
      ko: "과제에 Google 클래스룸을 사용할 때의 이점은 무엇입니까? (모두 선택)"
    },
    options: [
      { en: "Automatically saves student work in Drive", ko: "학생의 과제를 드라이브에 자동으로 저장합니다." },
      { en: "Allows teachers to make a copy for each student", ko: "교사가 각 학생에게 사본을 제공할 수 있습니다." },
      { en: "Students can only submit work once", ko: "학생은 과제를 한 번만 제출할 수 있습니다." },
      { en: "Provides a private comment channel for feedback", ko: "피드백을 위한 비공개 댓글 채널을 제공합니다." }
    ],
    answer: [0, 1, 3],
    type: 'multiple'
  },
  {
    id: 5,
    question: {
      en: "A student is having trouble seeing the small text on their Chromebook. Which accessibility feature should you suggest?",
      ko: "한 학생이 크롬북의 작은 글씨를 보는 데 어려움을 겪고 있습니다. 어떤 접근성 기능을 제안해야 합니까?"
    },
    options: [
      { en: "Select-to-speak", ko: "선택 항목 말하기" },
      { en: "High contrast mode", ko: "고대비 모드" },
      { en: "Full-screen magnifier", ko: "전체 화면 돋보기" },
      { en: "Sticky keys", ko: "고정 키" }
    ],
    answer: 2,
    type: 'single'
  },
  {
    id: 6,
    question: {
      en: "You want to share a Google Doc with a colleague so they can only view it, but not make changes or comments. Which permission should you set?",
      ko: "동료에게 Google 문서를 공유하여 동료가 문서를 볼 수만 있고 변경하거나 댓글을 달 수 없도록 하려고 합니다. 어떤 권한을 설정해야 합니까?"
    },
    options: [
      { en: "Viewer", ko: "뷰어" },
      { en: "Commenter", ko: "댓글 작성자" },
      { en: "Editor", ko: "편집자" },
      { en: "Owner", ko: "소유자" }
    ],
    answer: 0,
    type: 'single'
  },
  {
    id: 7,
    question: {
      en: "To create a self-grading quiz, which tool should you use?",
      ko: "자동 채점 퀴즈를 만들려면 어떤 도구를 사용해야 합니까?"
    },
    options: [
      { en: "Google Docs", ko: "Google 문서" },
      { en: "Google Slides", ko: "Google 프레젠테이션" },
      { en: "Google Forms", ko: "Google 설문지" },
      { en: "Google Drawings", ko: "Google 드로잉" }
    ],
    answer: 2,
    type: 'single'
  },
  {
    id: 8,
    question: {
      en: "You want to organize your Chrome browser tabs for a project. What feature allows you to group related tabs together?",
      ko: "프로젝트를 위해 Chrome 브라우저 탭을 정리하고 싶습니다. 관련 탭을 함께 묶을 수 있는 기능은 무엇입니까?"
    },
    options: [
      { en: "Tab Groups", ko: "탭 그룹" },
      { en: "Bookmarks Bar", ko: "북마크바" },
      { en: "Incognito Window", ko: "시크릿 창" },
      { en: "Reading List", ko: "읽기 목록" }
    ],
    answer: 0,
    type: 'single'
  },
  {
    id: 9,
    question: {
      en: "Which of the following creates a task in Google Tasks? (Select all that apply)",
      ko: "다음 중 Google Tasks에서 할 일을 생성하는 방법은 무엇입니까? (모두 선택)"
    },
    options: [
      { en: "Dragging an email from Gmail to the Tasks sidebar", ko: "Gmail에서 이메일을 Tasks 사이드바로 드래그" },
      { en: "Clicking 'Add Task' in the Calendar side panel", ko: "캘린더 측면 패널에서 '할 일 추가' 클릭" },
      { en: "Assigning a task in a Google Doc comment", ko: "Google 문서 댓글에서 할 일 할당" },
      { en: "Using the 'Create' button in Drive", ko: "드라이브의 '새 로 만들기' 버튼 사용" }
    ],
    answer: [0, 1, 2],
    type: 'multiple'
  },
  {
    id: 10,
    question: {
      en: "You need to schedule a meeting with three colleagues and want to find a time that works for everyone. What Calendar feature should you use?",
      ko: "동료 3명과 회의 일정을 잡아야 하며 모두에게 적합한 시간을 찾고 싶습니다. 어떤 캘린더 기능을 사용해야 합니까?"
    },
    options: [
      { en: "Share your calendar", ko: "캘린더 공유" },
      { en: "Find a Time / Suggested Times", ko: "시간 찾기 / 추천 시간" },
      { en: "Create distinct calendars for each person", ko: "각 사람에 대한 별도의 캘린더 만들기" },
      { en: "Email them to ask", ko: "이메일로 물어보기" }
    ],
    answer: 1,
    type: 'single'
  },
  {
    id: 11,
    question: {
      en: "What visual indicator in Gmail informs you that an email was sent directly to you and not a mailing list?",
      ko: "이메일이 메일링 리스트가 아닌 본인에게 직접 발송되었음을 알려주는 Gmail의 시각적 표시기는 무엇입니까?"
    },
    options: [
      { en: "A star icon", ko: "별표 아이콘" },
      { en: "Personal Level Indicators (> or >>)", ko: "개인 수준 표시기 (> 또는 >>)" },
      { en: "Important marker (yellow tag)", ko: "중요 표시(노란색 태그)" },
      { en: "The sender's image", ko: "보낸 사람의 이미지" }
    ],
    answer: 1,
    type: 'single',
    explanation: {
      en: "Allowing personal level indicators in settings shows '>' for emails sent to you and others, and '>>' for emails sent only to you.",
      ko: "설정에서 개인 수준 표시기를 허용하면 본인과 다른 사람에게 보낸 이메일에는 '>', 본인에게만 보낸 이메일에는 '>>'가 표시됩니다."
    }
  },
  {
    id: 12,
    question: {
      en: "You want to ensure that every time you open Chrome, your email, calendar, and drive tabs open automatically. What setting should you change?",
      ko: "Chrome을 열 때마다 이메일, 캘린더, 드라이브 탭이 자동으로 열리도록 하고 싶습니다. 어떤 설정을 변경해야 합니까?"
    },
    options: [
      { en: "On startup: Open the New Tab page", ko: "시작 그룹: 새 탭 페이지 열기" },
      { en: "On startup: Continue where you left off", ko: "시작 그룹: 중단한 위치에서 계속하기" },
      { en: "On startup: Open a specific page or set of pages", ko: "시작 그룹: 특정 페이지 또는 페이지 모음 열기" },
      { en: "Appearance: Show Home button", ko: "모양: 홈 버튼 표시" }
    ],
    answer: 2,
    type: 'single'
  },
  {
    id: 13,
    question: {
      en: "Which Google Tool is best suited for creating an interactive presentation with live Q&A?",
      ko: "실시간 Q&A가 포함된 대화형 프레젠테이션을 만드는 데 가장 적합한 Google 도구는 무엇입니까?"
    },
    options: [
      { en: "Google Docs", ko: "Google 문서" },
      { en: "Google Sheets", ko: "Google 스프레드시트" },
      { en: "Google Slides", ko: "Google 프레젠테이션" },
      { en: "Google Drawings", ko: "Google 드로잉" }
    ],
    answer: 2,
    type: 'single'
  },
  {
    id: 14,
    question: {
      en: "You want to create a mailing list for your school's math department to easily email everyone at once. Which tool should you use?",
      ko: "학교 수학 부서를 위한 메일링 리스트를 만들어 한 번에 모든 사람에게 쉽게 이메일을 보내고 싶습니다. 어떤 도구를 사용해야 합니까?"
    },
    options: [
      { en: "Google Groups", ko: "Google 그룹스" },
      { en: "Google Sites", ko: "Google 사이트 도구" },
      { en: "Google Forms", ko: "Google 설문지" },
      { en: "Google Drive", ko: "Google 드라이브" }
    ],
    answer: 0,
    type: 'single'
  },
  {
    id: 15,
    question: {
      en: "Where can you find curated educational resources such as lesson plans and activities in Google Classroom?",
      ko: "Google 클래스룸에서 수업 계획 및 활동과 같은 선별된 교육 자료를 어디에서 찾을 수 있습니까?"
    },
    options: [
      { en: "The 'About' section", ko: "'정보' 섹션" },
      { en: "There is no resource library", ko: "리소스 라이브러리가 없습니다." },
      { en: "Google Workspace Marketplace", ko: "Google Workspace Marketplace" },
      { en: "You must search Google Search externally", ko: "외부에서 Google 검색을 해야 합니다." }
    ],
    answer: 2,
    type: 'single',
    explanation: {
      en: "While Classroom itself is a management tool, you can integrate apps and find resources via the Marketplace or add-ons.",
      ko: "클래스룸 자체는 관리 도구이지만 Marketplace나 부가기능을 통해 앱을 통합하고 리소스를 찾을 수 있습니다."
    }
  },
  {
    id: 16,
    question: {
      en: "You want to quickly create a meeting event from a Gmail message. What is the most efficient way?",
      ko: "Gmail 메시지에서 바로 회의 일정을 빠르게 만들고 싶습니다. 가장 효율적인 방법은 무엇입니까?"
    },
    options: [
      { en: "Copy the text and paste into Calendar", ko: "텍스트를 복사하여 캘린더에 붙여넣기" },
      { en: "Open Calendar in a new tab and create event", ko: "새 탭에서 캘린더를 열고 일정 만들기" },
      { en: "Click the 'Create event' icon in the right sidebar within Gmail", ko: "Gmail 우측 사이드바의 '일정 만들기' 아이콘 클릭" },
      { en: "Forward the email to yourself", ko: "이메일을 자신에게 전달하기" }
    ],
    answer: 2,
    type: 'single'
  },
  {
    id: 17,
    question: {
      en: "Which feature in Google Docs allows multiple students to work on the same document simultaneously without overwriting each other's work?",
      ko: "Google 문서에서 여러 학생이 서로의 작업을 덮어쓰지 않고 동시에 같은 문서를 작업할 수 있게 해주는 기능은 무엇입니까?"
    },
    options: [
      { en: "Real-time collaboration", ko: "실시간 협업" },
      { en: "Track Changes", ko: "변경 내용 추적" },
      { en: "Version History", ko: "버전 기록" },
      { en: "Offline Access", ko: "오프라인 액세스" }
    ],
    answer: 0,
    type: 'single'
  },
  {
    id: 18,
    question: {
      en: "You want to organize your Google Drive files by color-coding folders. How can you do this?",
      ko: "Google 드라이브 파일을 폴더 색상 코딩으로 정리하고 싶습니다. 어떻게 할 수 있습니까?"
    },
    options: [
      { en: "You cannot change folder colors", ko: "폴더 색상은 변경할 수 없습니다." },
      { en: "Right-click the folder > Change color", ko: "폴더 우클릭 > 색상 변경" },
      { en: "Use a third-party extension", ko: "타사 확장 프로그램 사용" },
      { en: "Rename the folder with a color name", ko: "폴더 이름을 색상 이름으로 변경" }
    ],
    answer: 1,
    type: 'single'
  },
  {
    id: 19,
    question: {
      en: "In Google Slides, you want to ensure that text stays consistent throughout your presentation. What should you edit?",
      ko: "Google 프레젠테이션에서 프레젠테이션 전체의 텍스트 일관성을 유지하고 싶습니다. 무엇을 편집해야 합니까?"
    },
    options: [
      { en: "Each slide individually", ko: "각 슬라이드 개별 편집" },
      { en: "The Master Slide (Theme Builder)", ko: "마스터 슬라이드 (테마 빌더)" },
      { en: "Speaker Notes", ko: "발표자 노트" },
      { en: "Page Setup", ko: "페이지 설정" }
    ],
    answer: 1,
    type: 'single'
  },
  {
    id: 20,
    question: {
      en: "Which tool allows you to collect feedback from students and automatically visualize the results in a spreadsheet?",
      ko: "학생들로부터 피드백을 수집하고 결과를 스프레드시트에서 자동으로 시각화할 수 있게 해주는 도구는 무엇입니까?"
    },
    options: [
      { en: "Google Keep", ko: "Google Keep" },
      { en: "Google Forms", ko: "Google 설문지" },
      { en: "Google Chat", ko: "Google Chat" },
      { en: "Jamboard", ko: "Jamboard" }
    ],
    answer: 1,
    type: 'single'
  }
];

export const lv1Scenario: Scenario = {
  id: 1,
  title: {
    en: "Scenario 1: The New Semester Setup",
    ko: "시나리오 1: 새 학기 준비"
  },
  description: {
    en: "You are preparing for the upcoming semester and need to organize your digital classroom and resources.",
    ko: "다가오는 학기를 준비하기 위해 디지털 교실과 리소스를 정리해야 합니다."
  },
  tasks: [
    { en: "Create a new Google Classroom named 'Science 2024 - Period 1'.", ko: "'과학 2024 - 1교시'라는 이름의 새 Google 클래스룸을 만듭니다." },
    { en: "In the 'Classwork' tab, create a topic named 'Unit 1: Ecosystems'.", ko: "'수업' 탭에서 '단원 1: 생태계'라는 주제를 만듭니다." },
    { en: "Create an assignment titled 'Introductory Essay' within that topic.", ko: "해당 주제 내에 '소개 에세이'라는 제목의 과제를 만듭니다." },
    { en: "Attach a Google Doc template from your Drive and set it to 'Make a copy for each student'.", ko: "드라이브에서 Google 문서 템플릿을 첨부하고 '학생별로 사본 제공'으로 설정합니다." },
    { en: "Post a welcome announcement in the Stream inviting students to introduce themselves.", ko: "스트림에 환영 공지를 게시하여 학생들에게 자기소개를 하도록 요청합니다." }
  ]
};

export const lv1Tips: StudyTip[] = [
  {
    id: 1,
    category: "Drive",
    title: { en: "Understanding Permissions", ko: "권한 이해하기" },
    content: {
      en: "Remember the hierarchy: Owner > Editor > Commenter > Viewer. Owners can delete files, Editors can change content, Commenters can suggest edits, and Viewers can only read.",
      ko: "계층 구조를 기억하세요: 소유자 > 편집자 > 댓글 작성자 > 뷰어. 소유자는 파일을 삭제할 수 있고, 편집자는 내용을 변경할 수 있으며, 댓글 작성자는 수정을 제안할 수 있고, 뷰어는 읽기만 가능합니다."
    }
  },
  {
    id: 2,
    category: "Gmail",
    title: { en: "Search Operators", ko: "검색 연산자" },
    content: {
      en: "Mastering operators like 'from:', 'to:', 'has:attachment', 'is:unread', and 'older_than:' allows you to manage your inbox efficiently.",
      ko: "'from:', 'to:', 'has:attachment', 'is:unread', 'older_than:'과 같은 연산자를 마스터하면 받은편지함을 효율적으로 관리할 수 있습니다."
    }
  },
  {
    id: 3,
    category: "Classroom",
    title: { en: "Differentiation via Assignments", ko: "과제를 통한 개별화" },
    content: {
      en: "You can assign work to specific students rather than the whole class. This is perfect for remedial work or advanced projects for gifted students.",
      ko: "전체 학급이 아닌 특정 학생에게 과제를 할당할 수 있습니다. 이는 보충 학습이나 영재 학생을 위한 심화 프로젝트에 적합합니다."
    }
  },
  {
    id: 4,
    category: "Chrome",
    title: { en: "Omnibox Powers", ko: "옴니박스 활용" },
    content: {
      en: "The Chrome address bar (Omnibox) can do calculations, conversions, and even drag-and-drop URLs to your bookmarks bar.",
      ko: "Chrome 주소 표시줄(옴니박스)은 계산, 변환을 수행할 수 있으며 URL을 북마크바로 드래그 앤 드롭할 수도 있습니다."
    }
  }
];

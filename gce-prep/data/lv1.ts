
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

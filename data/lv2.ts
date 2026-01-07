import { Question, Scenario, StudyTip } from './lv1';

export const lv2Questions: Question[] = [
    {
        id: 1,
        question: {
            en: "You have a large dataset of student grades. You want to quickly identify all students who scored below 70 by turning the cell red. What feature should you use?",
            ko: "학생 성적에 대한 대규모 데이터 세트가 있습니다. 셀을 빨간색으로 바꿔 70점 미만의 점수를 받은 모든 학생을 빠르게 식별하고 싶습니다. 어떤 기능을 사용해야 합니까?"
        },
        options: [
            { en: "Filter views", ko: "필터 보기" },
            { en: "Pivot Table", ko: "피벗 테이블" },
            { en: "Conditional Formatting", ko: "조건부 서식" },
            { en: "Alternating colors", ko: "교차 색상" }
        ],
        answer: 2,
        type: 'single',
        explanation: {
            en: "Conditional formatting changes the appearance of cells based on specific criteria (e.g., value < 70).",
            ko: "조건부 서식은 특정 기준(예: 값 < 70)에 따라 셀의 모양을 변경합니다."
        }
    },
    {
        id: 2,
        question: {
            en: "You are organizing a parent-teacher conference. You want parents to be able to book 15-minute slots with you. Which Calendar feature is most appropriate?",
            ko: "학부모 상담을 준비하고 있습니다. 학부모가 15분 단위로 상담 시간을 예약할 수 있도록 하려고 합니다. 적절한 캘린더 기능은 무엇입니까?"
        },
        options: [
            { en: "Create a recurring event", ko: "반복 일정 만들기" },
            { en: "Appointment Schedules", ko: "약속 일정" },
            { en: "Invite all parents to one event", ko: "모든 학부모를 하나의 일정에 초대" },
            { en: "Share your calendar as 'Public'", ko: "캘린더를 '공개'로 공유" }
        ],
        answer: 1,
        type: 'single'
    },
    {
        id: 3,
        question: {
            en: "In a Google Doc, you want to link a student's name to their contact card so you can quickly email them. What should you use?",
            ko: "Google 문서에서 학생의 이름에 연락처 카드를 연결하여 빠르게 이메일을 보내고 싶습니다. 무엇을 사용해야 합니까?"
        },
        options: [
            { en: "Hyperlink", ko: "하이퍼링크" },
            { en: "Bookmark", ko: "북마크" },
            { en: "Smart Canvas (People Chip)", ko: "스마트 캔버스 (사용자 칩)" },
            { en: "Footnote", ko: "각주" }
        ],
        answer: 2,
        type: 'single'
    },
    {
        id: 4,
        question: {
            en: "You suspect some students might have copied their essay from the internet. What Classroom feature can help you check for plagiarism?",
            ko: "어떤 학생들이 에세이를 인터넷에서 복사했을지도 모른다는 의심이 듭니다. 표절을 확인하는 데 도움이 되는 클래스룸 기능은 무엇입니까?"
        },
        options: [
            { en: "Gradebook", ko: "성적표" },
            { en: "Rubrics", ko: "채점 기준표" },
            { en: "Originality Reports", ko: "독창성 보고서" },
            { en: "Comment Bank", ko: "댓글 은행" }
        ],
        answer: 2,
        type: 'single'
    },
    {
        id: 5,
        question: {
            en: "Which of the following can be done in a Google Sites carousel? (Select all that apply)",
            ko: "Google 사이트 도구 캐러셀에서 할 수 있는 작업은 무엇입니까? (모두 선택)"
        },
        options: [
            { en: "Add images", ko: "이미지 추가" },
            { en: "Add YouTube videos", ko: "YouTube 동영상 추가" },
            { en: "Add text captions to images", ko: "이미지에 텍스트 캡션 추가" },
            { en: "Link images to other pages", ko: "이미지를 다른 페이지에 연결" }
        ],
        answer: [0, 2, 3],
        type: 'multiple'
    },
    {
        id: 6,
        question: {
            en: "You want to create a custom map for your history class showing battle locations. Which tool is best for this?",
            ko: "역사 수업을 위해 전투 위치를 보여주는 맞춤 지도를 만들고 싶습니다. 어떤 도구가 가장 적합합니까?"
        },
        options: [
            { en: "Google Maps", ko: "Google 지도" },
            { en: "Google My Maps", ko: "Google 내 지도" },
            { en: "Google Earth", ko: "Google 어스" },
            { en: "Google Street View", ko: "Google 스트리트 뷰" }
        ],
        answer: 1,
        type: 'single',
        explanation: {
            en: "Google My Maps allows you to create custom maps with points, lines, and shapes, and save them to Drive.",
            ko: "Google 내 지도를 사용하면 점, 선, 도형으로 맞춤 지도를 만들고 드라이브에 저장할 수 있습니다."
        }
    },
    {
        id: 7,
        question: {
            en: "In Google Sheets, you want to combine data from two different cells into one. Which function should you use?",
            ko: "Google 스프레드시트에서 두 개의 다른 셀에 있는 데이터를 하나로 합치고 싶습니다. 어떤 함수를 사용해야 합니까?"
        },
        options: [
            { en: "=SPLIT()", ko: "=SPLIT()" },
            { en: "=JOIN()", ko: "=JOIN()" },
            { en: "=CONCATENATE()", ko: "=CONCATENATE()" },
            { en: "=MERGE()", ko: "=MERGE()" }
        ],
        answer: 2,
        type: 'single'
    },
    {
        id: 8,
        question: {
            en: "You want to create a Google Form that directs students to different questions based on their previous answers. What feature is this?",
            ko: "이전 답변에 따라 학생들을 다른 질문으로 안내하는 Google 설문지를 만들고 싶습니다. 이 기능은 무엇입니까?"
        },
        options: [
            { en: "Response Validation", ko: "응답 확인" },
            { en: "Go to section based on answer", ko: "답변을 기준으로 섹션 이동" },
            { en: "Shuffle question order", ko: "질문 순서 섞기" },
            { en: "Required questions", ko: "필수 질문" }
        ],
        answer: 1,
        type: 'single'
    },
    {
        id: 9,
        question: {
            en: "Which function in Google Sheets allows you to search for a value in the first column of a range and return a value in the same row from another column?",
            ko: "범위의 첫 번째 열에서 값을 검색하고 다른 열의 같은 행에 있는 값을 반환하는 Google 스프레드시트 함수는 무엇입니까?"
        },
        options: [
            { en: "=HLOOKUP", ko: "=HLOOKUP" },
            { en: "=SEARCH", ko: "=SEARCH" },
            { en: "=VLOOKUP", ko: "=VLOOKUP" },
            { en: "=FIND", ko: "=FIND" }
        ],
        answer: 2,
        type: 'single'
    },
    {
        id: 10,
        question: {
            en: "You want to perform a search in Google Drive for PDF files only. What operator should you use?",
            ko: "Google 드라이브에서 PDF 파일만 검색하고 싶습니다. 어떤 연산자를 사용해야 합니까?"
        },
        options: [
            { en: "type:pdf", ko: "type:pdf" },
            { en: "file:pdf", ko: "file:pdf" },
            { en: "ext:pdf", ko: "ext:pdf" },
            { en: "format:pdf", ko: "format:pdf" }
        ],
        answer: 0,
        type: 'single'
    },
    {
        id: 11,
        question: {
            en: "Which YouTube feature allows you to add a poll or link to another video during playback?",
            ko: "재생 중 설문조사를 추가하거나 다른 동영상으로 연결할 수 있는 YouTube 기능은 무엇입니까?"
        },
        options: [
            { en: "End Screens", ko: "최종 화면" },
            { en: "Cards", ko: "카드" },
            { en: "Subtitles", ko: "자막" },
            { en: "Chapters", ko: "챕터" }
        ],
        answer: 1,
        type: 'single'
    },
    {
        id: 12,
        question: {
            en: "You want faster access to specific folders in Drive without moving them from their original location. What should you use?",
            ko: "원래 위치에서 폴더를 이동하지 않고 드라이브의 특정 폴더에 더 빠르게 액세스하고 싶습니다. 무엇을 사용해야 합니까?"
        },
        options: [
            { en: "Make a copy", ko: "사본 만들기" },
            { en: "Add to Starred", ko: "중요 문서함에 추가" },
            { en: "Add shortcut to Drive", ko: "드라이브에 바로가기 추가" },
            { en: "Move to Priority", ko: "우선순위로 이동" }
        ],
        answer: 2,
        type: 'single'
    },
    {
        id: 13,
        question: {
            en: "In Chrome, you want to save a set of tabs to open later on another device. What feature helps with this?",
            ko: "Chrome에서 나중에 다른 기기에서 열 수 있도록 탭 세트를 저장하고 싶습니다. 도움이 되는 기능은 무엇입니까?"
        },
        options: [
            { en: "Bookmarks", ko: "북마크" },
            { en: "Reading List", ko: "읽기 목록" },
            { en: "History -> Tabs from other devices", ko: "방문 기록 -> 다른 기기의 탭" },
            { en: "Save page as...", ko: "다른 이름으로 저장..." }
        ],
        answer: 2,
        type: 'single'
    },
    {
        id: 14,
        question: {
            en: "Which tool is best for automating the creation of certificates for students who pass a quiz?",
            ko: "퀴즈를 통과한 학생을 위한 수료증 생성을 자동화하는 데 가장 적합한 도구는 무엇입니까?"
        },
        options: [
            { en: "Google Docs", ko: "Google 문서" },
            { en: "Google Slides + Add-on (e.g., Autocrat)", ko: "Google 프레젠테이션 + 부가기능(예: Autocrat)" },
            { en: "Google Sheets alone", ko: "Google 스프레드시트 단독" },
            { en: "Google Keep", ko: "Google Keep" }
        ],
        answer: 1,
        type: 'single'
    },
    {
        id: 15,
        question: {
            en: "You want to create a website for your school portfolio that adapts to mobile devices automatically. What should you use?",
            ko: "모바일 장치에 자동으로 적응하는 학교 포트폴리오용 웹사이트를 만들고 싶습니다. 무엇을 사용해야 합니까?"
        },
        options: [
            { en: "Classic Google Sites", ko: "기존 Google 사이트 도구" },
            { en: "New Google Sites", ko: "새 Google 사이트 도구" },
            { en: "blogger.com", ko: "blogger.com" },
            { en: "Google Docs published to web", ko: "웹에 게시된 Google 문서" }
        ],
        answer: 1,
        type: 'single'
    },
    {
        id: 16,
        question: {
            en: "You want to notify a specific user in a comment within a Google Sheet. What character should you use?",
            ko: "Google 스프레드시트의 댓글 내에서 특정 사용자에게 알림을 보내고 싶습니다. 어떤 문자를 사용해야 합니까?"
        },
        options: [
            { en: "# or !", ko: "# 또는 !" },
            { en: "+ or @", ko: "+ 또는 @" },
            { en: "$ or %", ko: "$ 또는 %" },
            { en: "* or &", ko: "* 또는 &" }
        ],
        answer: 1,
        type: 'single'
    },
    {
        id: 17,
        question: {
            en: "Which function allows you to import data from one Google Spreadsheet to another?",
            ko: "한 Google 스프레드시트에서 다른 스프레드시트로 데이터를 가져올 수 있는 함수는 무엇입니까?"
        },
        options: [
            { en: "=IMPORTSHEET", ko: "=IMPORTSHEET" },
            { en: "=IMPORTRANGE", ko: "=IMPORTRANGE" },
            { en: "=IMPORTDATA", ko: "=IMPORTDATA" },
            { en: "=GETSHEETDATA", ko: "=GETSHEETDATA" }
        ],
        answer: 1,
        type: 'single'
    },
    {
        id: 18,
        question: {
            en: "You want to create a distribution group for emailing parents without revealing their email addresses to each other. What feature of Google Groups should you use?",
            ko: "학부모의 이메일 주소를 서로 공개하지 않고 이메일을 보낼 수 있는 배포 그룹을 만들고 싶습니다. Google 그룹스의 어떤 기능을 사용해야 합니까?"
        },
        options: [
            { en: "Email List", ko: "이메일 목록" },
            { en: "Web Forum", ko: "웹 포럼" },
            { en: "Q&A Forum", ko: "Q&A 포럼" },
            { en: "BCC or 'Announcement Only' group settings", ko: "숨은 참조(BCC) 또는 '공지만 가능' 그룹 설정" }
        ],
        answer: 3,
        type: 'single'
    },
    {
        id: 19,
        question: {
            en: "In Google Scholar, you found an article you want to save for later reading. Where does the 'Star' icon save it to?",
            ko: "Google 학술검색에서 나중에 읽고 싶은 기사를 찾았습니다. '별표' 아이콘을 클릭하면 어디에 저장됩니까?"
        },
        options: [
            { en: "Google Drive", ko: "Google 드라이브" },
            { en: "Your specific My Library in Scholar", ko: "Scholar의 내 서재" },
            { en: "Chrome Bookmarks", ko: "Chrome 북마크" },
            { en: "Google Keep", ko: "Google Keep" }
        ],
        answer: 1,
        type: 'single'
    },
    {
        id: 20,
        question: {
            en: "You want to restrict a Google Form so that only users within your school domain can access it. Where is this setting found?",
            ko: "학교 도메인 내의 사용자만 Google 설문지에 액세스할 수 있도록 제한하고 싶습니다. 이 설정은 어디에 있습니까?"
        },
        options: [
            { en: "Form Settings (General)", ko: "설문지 설정 (일반)" },
            { en: "Question Settings", ko: "질문 설정" },
            { en: "Send Button Options", ko: "보내기 버튼 옵션" },
            { en: "Script Editor", ko: "스크립트 편집기" }
        ],
        answer: 0,
        type: 'single'
    }
];

export const lv2Scenario: Scenario = {
    id: 1,
    title: {
        en: "Scenario 1: Department Analysis",
        ko: "시나리오 1: 부서 분석"
    },
    description: {
        en: "Your department head has asked you to analyze the test results for the entire grade level and prepare a report.",
        ko: "부서장으로부터 전체 학년의 시험 결과를 분석하고 보고서를 작성해 달라는 요청을 받았습니다."
    },
    tasks: [
        { en: "Open the 'Grade Data' Google Sheet shared with you.", ko: "공유된 '성적 데이터' Google 스프레드시트를 여십시오." },
        { en: "Create a Pivot Table to show the average score for each subject.", ko: "피벗 테이블을 만들어 과목별 평균 점수를 표시하십시오." },
        { en: "Use a Slicer to allow filtering by 'Teacher Name'.", ko: "슬라이서를 사용하여 '교사 이름'으로 필터링할 수 있도록 하십시오." },
        { en: "Create a bar chart visualizing the data and move it to its own sheet.", ko: "데이터를 시각화하는 막대 차트를 만들고 별도의 시트로 이동하십시오." },
        { en: "Embed this chart into a new Google Doc report titled 'End of Term Analysis'.", ko: "이 차트를 '학기말 분석'이라는 제목의 새 Google 문서 보고서에 삽입하십시오." }
    ]
};

export const lv2Tips: StudyTip[] = [
    {
        id: 1,
        category: "Sheets",
        title: { en: "Pivot Tables Power", ko: "피벗 테이블의 힘" },
        content: {
            en: "Pivot tables allow you to summarize large datasets without formulas. Use them to find averages, counts, and sums grouped by category.",
            ko: "피벗 테이블을 사용하면 수식 없이 대규모 데이터 세트를 요약할 수 있습니다. 카테고리별로 그룹화된 평균, 개수 및 합계를 찾는 데 사용하세요."
        }
    },
    {
        id: 2,
        category: "Forms",
        title: { en: "Branching Logic", ko: "분기 로직" },
        content: {
            en: "Use 'Go to section based on answer' to create adaptive quizzes or personalized surveys. Always ensure you have sections created first!",
            ko: "'답변을 기준으로 섹션 이동'을 사용하여 적응형 퀴즈나 개인화된 설문을 만드세요. 항상 섹션을 먼저 만들어야 합니다!"
        }
    },
    {
        id: 3,
        category: "Search",
        title: { en: "Advanced Drive Search", ko: "고급 드라이브 검색" },
        content: {
            en: "Don't just scroll. Use the search bar dropdown to filter by file type (PDF, Spreadsheets), specific owners, or modification date.",
            ko: "스크롤만 하지 마세요. 검색창 드롭다운을 사용하여 파일 형식(PDF, 스프레드시트), 특정 소유자 또는 수정 날짜별로 필터링하세요."
        }
    },
    {
        id: 4,
        category: "YouTube",
        title: { en: "Playlist Curation", ko: "재생목록 큐레이션" },
        content: {
            en: "You can curate existing videos into playlists for students. You don't always have to create your own content.",
            ko: "기존 동영상을 학생들을 위한 재생목록으로 큐레이션할 수 있습니다. 항상 자신의 콘텐츠를 직접 만들 필요는 없습니다."
        }
    }
];

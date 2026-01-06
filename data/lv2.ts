import { Question, Scenario } from './lv1';

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

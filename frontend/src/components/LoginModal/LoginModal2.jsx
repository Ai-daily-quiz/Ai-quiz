import supabase from '../../supabase';

const LoginModal2 = ({ user }) => {
  const handleGoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
        queryParams: {
          prompt: 'select_account',
        },
      },
    });
    if (error) console.error('로그인 에러:', error);
  };

  const handleKakaoLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        scopes: ['profile_nickname', 'profile_image'],
        redirectTo: window.location.origin,
        queryParams: {
          prompt: 'select_account',
        },
      },
    });
    if (error) console.error('로그인 에러:', error);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('로그아웃 에러:', error);
  };

  const handleLogIn = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('로그인 에러:', error);
  };

  if (user) {
    return (
      <div>
        <button
          onClick={handleLogout}
          className="bg-white text-gray-700 px-4 py-1 rounded-full text-lg font-medium shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:scale-110 transform"
        >
          로그아웃
        </button>
      </div>
    );
  }

  // 로그인되지 않은 경우 소셜 로그인 버튼들 표시
  return (
    <div className="fixed inset-0 z-50">
      {/* 배경 - 첨부 이미지처럼 4분할 컬러 영역 */}
      <div className="absolute inset-0">
        {/* 좌측 상단 - 오렌지 영역 */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-orange-400 opacity-70"></div>

        {/* 우측 상단 - 민트/에메랄드 영역 */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-400 opacity-70"></div>

        {/* 우측 하단 - 노란색 영역 */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-yellow-300 opacity-70"></div>

        {/* 좌측 하단 - 보라색 영역 */}
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-400 opacity-70"></div>
      </div>

      {/* 로그인 모달 - 중앙 정렬 */}
      <div className="relative flex items-center justify-center h-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center w-[30%] h-[35%] min-w-[320px] max-w-[500px] mx-auto border border-gray-200">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <p className="text-xl text-gray-700 font-medium mb-4">
              로그인이 필요합니다
            </p>
            <p className="text-gray-500 mb-6">
              퀴즈를 시작하려면 먼저 로그인해주세요
            </p>
          </div>
          <LoginModal user={user} />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

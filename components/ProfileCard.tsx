export default function ProfileCard() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <img
        src="/avatar.jpg"
        alt="头像"
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h2 className="text-2xl font-bold text-center mt-4">你的名字</h2>
      <p className="text-gray-400 text-center mt-2">个人简介</p>
      <div className="mt-4 flex justify-center space-x-4">
        {/* 添加社交媒体链接 */}
      </div>
    </div>
  );
} 
"use client";

import { useState } from "react";
import { Bell, Check, X, MapPin, Users, DollarSign, Award, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const notifications = [
    {
      id: 1,
      type: "study_join",
      title: "새로운 참가자",
      message: "React 심화 스터디에 김지영님이 참가했습니다",
      time: "5분 전",
      read: false,
      icon: Users,
      color: "blue"
    },
    {
      id: 2,
      type: "payment",
      title: "회비 납입 확인",
      message: "AWS 클라우드 자격증 스터디 회비 30,000원이 납입되었습니다",
      time: "1시간 전",
      read: false,
      icon: DollarSign,
      color: "green"
    },
    {
      id: 3,
      type: "meeting",
      title: "모임 일정 안내",
      message: "디자인 시스템 구축 스터디 다음 모임: 12월 26일 14:00",
      time: "2시간 전",
      read: true,
      icon: Clock,
      color: "purple"
    },
    {
      id: 4,
      type: "badge",
      title: "배지 획득",
      message: "스터디 완주 배지를 획득했습니다! 🎉",
      time: "1일 전",
      read: true,
      icon: Award,
      color: "yellow"
    },
    {
      id: 5,
      type: "location",
      title: "장소 변경",
      message: "React 심화 스터디 장소가 변경되었습니다",
      time: "2일 전",
      read: true,
      icon: MapPin,
      color: "orange"
    },
    {
      id: 6,
      type: "system",
      title: "시스템 업데이트",
      message: "새로운 기능이 추가되었습니다. 확인해보세요!",
      time: "3일 전",
      read: true,
      icon: Bell,
      color: "gray"
    }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const filteredNotifications = 
    activeTab === "unread" 
      ? notifications.filter(n => !n.read)
      : notifications;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="rounded-lg p-2 hover:bg-gray-100">
                <ArrowRight className="h-6 w-6 rotate-180" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">알림</h1>
                {unreadCount > 0 && (
                  <p className="text-sm text-gray-600">
                    읽지 않은 알림 {unreadCount}개
                  </p>
                )}
              </div>
            </div>
            {unreadCount > 0 && (
              <button className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">
                모두 읽음으로 표시
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="flex gap-8">
            {[
              { id: "all", label: "전체" },
              { id: "unread", label: "읽지 않음", count: unreadCount }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`border-b-2 pb-4 px-1 text-sm font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {tab.label}
                {tab.count && tab.count > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-blue-600 text-white rounded-full text-xs">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`rounded-lg border p-4 transition-all hover:shadow-md ${
                    notification.read
                      ? "bg-white border-gray-200"
                      : "bg-blue-50 border-blue-200"
                  }`}
                >
                  <div className="flex gap-4">
                    <div className={`rounded-lg p-3 bg-${notification.color}-100 flex-shrink-0`}>
                      <Icon className={`h-5 w-5 text-${notification.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                          {!notification.read && (
                            <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Check className="h-4 w-4 text-gray-500" />
                          </button>
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <X className="h-4 w-4 text-gray-500" />
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{notification.message}</p>
                      <span className="text-xs text-gray-500">{notification.time}</span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-16">
              <Bell className="mx-auto h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">알림이 없습니다</h3>
              <p className="text-gray-600">새로운 알림이 오면 여기에 표시됩니다</p>
            </div>
          )}
        </div>

        {/* Load More */}
        {filteredNotifications.length > 0 && (
          <div className="text-center mt-8">
            <button className="px-6 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">
              더 보기
            </button>
          </div>
        )}

        {/* Settings */}
        <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">알림 설정</h3>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-gray-700">이메일 알림</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">푸시 알림</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">스터디 활동 알림</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">회비 관련 알림</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </label>
          </div>
        </div>
      </main>
    </div>
  );
}

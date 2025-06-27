export interface EngagementData {
  post: number;
  likes: number;
  comments: number;
}

export interface AnalyticsData {
  followers: number[];
  engagement: EngagementData[];
  bestPostTime: string;
}

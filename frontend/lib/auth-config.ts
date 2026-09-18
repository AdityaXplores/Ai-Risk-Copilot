import { User } from '../types';

export const DEMO_MODE = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

export const DEMO_USER: User = {
  id: 1,
  name: 'Demo Analyst',
  email: 'demo@compliance.local',
  role: 'Analyst',
  created_at: '2026-01-01T00:00:00.000Z',
};

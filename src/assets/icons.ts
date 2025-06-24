// icons.ts
import {
  faBriefcase,
  faBorderAll,
  faEnvelope,
  faUser,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

// Strongly typed icon names
export const IconName = {
  BRIEFCASE: "briefcase",
  BORDER_ALL: "border-all",
  ENVELOPE: "envelope",
  USER: "user",
} as const;

export type IconName = (typeof IconName)[keyof typeof IconName];

export const iconMap: Record<IconName, IconDefinition> = {
  [IconName.BRIEFCASE]: faBriefcase,
  [IconName.BORDER_ALL]: faBorderAll,
  [IconName.ENVELOPE]: faEnvelope,
  [IconName.USER]: faUser,
};

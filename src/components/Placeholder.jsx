import SectionHeader from "./SectionHeader";

export const NewsSkeleton = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    {new Array(4)?.fill(0)?.map(() => (
      <div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse"></div>
    ))}
  </div>
);

export const NewsError = ({ error }) => (
  <SectionHeader>Error loading data: {error?.message}</SectionHeader>
);

export const NewsNoData = () => (
  <SectionHeader>Sorry, no news available</SectionHeader>
);

export const SourceNoData = () => (
  <SectionHeader>Sorry, no Source available</SectionHeader>
);

export const showMessage = ({ message }) => (
  <SectionHeader>{message}</SectionHeader>
);

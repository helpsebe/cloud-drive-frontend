import React from "react";
import { FileItem } from "@/api/dto/files.dto";
import { FileActions } from "@/components/FileActions";
import { FileList, FileSelectType } from "@/components/FileList";
import { Empty, Spin } from "antd";

import * as Api from "@/api";

interface FilesProps {
  items: FileItem[];
  withActions?: boolean;
}

const Files: React.FC<FilesProps> = ({ items, withActions }) => {
  const [files, setFiles] = React.useState<FileItem[]>(items || []);
  const [selectedIds, setSelectedIds] = React.useState<number[]>([]);

  const onFileSelect = (id: number, type: FileSelectType) => {
    if (type === "select") {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((i) => i !== id));
    }
  };

  const onClickRemove = () => {
    setSelectedIds([]);
    setFiles((prev) => prev.filter((file) => !selectedIds.includes(file.id)));
    Api.files.remove(selectedIds);
  };

  const onClickShare = () => {
    alert("Share");
  };
  return (
    <>
      {files.length ? (
        <>
          {withActions && (
            <FileActions
              onClickRemove={onClickRemove}
              onClickShare={onClickShare}
              isActive={!!selectedIds.length}
            />
          )}
          <FileList items={files} onFileSelect={onFileSelect} />
        </>
      ) : (
        <Empty className="empty-block" description="No files" />
      )}
    </>
  );
};

export default Files;

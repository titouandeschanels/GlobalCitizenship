import React, { useState } from "react";
import {
    SubmissionBox,
    TitleBox,
    SyncButton,
    SubmissionContainer,
    SubmissionItem,
    Circle,
    Box,
    IntroNavigation,
    ExplanationCircle,
    TdWithPadding,
    UploadButton,
    FileName,
    UploadContainer,
} from "../submission/elements";
import Sync from '../../assets/icons/sync.png';
import { ReactComponent as NavArrow } from "../../assets/icons/intro-navigate-arrow.svg";
import { Green, LightGray, Orange } from "../../colors";
import Upload from '../../assets/icons/upload.png'

interface FileUploadStatus {
    files: File[];
    uploaded: boolean;
}

interface SubmissionProps { }

const Submissionlayout: React.FC<SubmissionProps> = () => {
    const [fileUploads, setFileUploads] = useState<FileUploadStatus[]>(Array(6).fill({ files: [], uploaded: false }));

    const handleUpload = (index: number, files: FileList | null) => {
        if (!files) return;

        const updatedFileUploads = [...fileUploads];
        updatedFileUploads[index] = { files: Array.from(files), uploaded: true };
        setFileUploads(updatedFileUploads);
    };

    const modules = [
        "This is me",
        "Me and my circles",
        "The influence of perceptions",
        "Dilemmas",
        "Challende and goal setting",
        "Value-based challenge creation"
    ];

    return (
        <>
            <SubmissionBox>
                <IntroNavigation>
                    <p>Home</p>
                    <NavArrow />
                    <p>Journey</p>
                    <NavArrow />
                    <p>Submission Point</p>
                </IntroNavigation>
                <TitleBox>
                    <h2>Submission Point</h2>
                    <table>
                        <tbody>
                            <tr>
                                <TdWithPadding>
                                    <ExplanationCircle style={{ backgroundColor: Green }} />
                                </TdWithPadding>
                                <TdWithPadding>
                                    <h5>Completed</h5>
                                </TdWithPadding>
                                <TdWithPadding>
                                    <ExplanationCircle style={{ backgroundColor: Orange }} />
                                </TdWithPadding>
                                <TdWithPadding>
                                    <h5>Ongoing</h5>
                                </TdWithPadding>
                                <TdWithPadding>
                                    <SyncButton>
                                        <img src={Sync} alt="Sync Button" />
                                    </SyncButton>
                                </TdWithPadding>
                            </tr>
                        </tbody>
                    </table>
                </TitleBox>
                <SubmissionContainer>
                    {fileUploads.map((fileUpload, index) => (
                        <SubmissionItem key={index}>
                            <Circle style={{
                                backgroundColor:
                                    // If it's the first module and no file has been uploaded or the previous module is uploaded and the current one isn't -> orange
                                    (index === 0 && !fileUpload.uploaded) || (fileUploads[index - 1]?.uploaded && !fileUpload.uploaded) ? Orange :
                                        // If the current module is uploaded -> green; otherwise -> gray
                                        (fileUpload.uploaded ? Green : LightGray)
                            }} />
                            <Box style={{
                                backgroundColor:
                                    // If it's the first module and no file has been uploaded or the previous module is uploaded and the current one isn't -> orange
                                    (index === 0 && !fileUpload.uploaded) || (fileUploads[index - 1]?.uploaded && !fileUpload.uploaded) ? Orange :
                                        // If the current module is uploaded -> green; otherwise -> gray
                                        (fileUpload.uploaded ? Green : LightGray)
                            }} >
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h3>{modules[index]}</h3>
                                            </td>
                                            <td>
                                                <UploadContainer>
                                                    <div>
                                                        {fileUpload.files.map((file, i) => (
                                                            <div key={i}>
                                                                <FileName>{file.name}</FileName>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <UploadButton>
                                                        <label htmlFor={`file-upload-${index}`} className="custom-file-upload">
                                                            <img src={Upload} alt="upload" />
                                                        </label>
                                                        <input
                                                            id={`file-upload-${index}`}
                                                            type="file"
                                                            multiple
                                                            onChange={(e) => handleUpload(index, e.target.files)}
                                                            style={{ display: "none" }}
                                                        />
                                                    </UploadButton>
                                                </UploadContainer>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Box>
                        </SubmissionItem>
                    ))}
                </SubmissionContainer>

            </SubmissionBox>
        </>
    );
};

export default Submissionlayout;

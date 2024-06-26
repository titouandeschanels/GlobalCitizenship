import React, { useState, useEffect } from "react";
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
    Popup,
    PopupContent,
    ButtonBadgesBook,
    ButtonLater,
    TitleIconWrapper,
    Title,
} from "../submission/elements";
import Sync from '../../assets/icons/sync.png';
import { ReactComponent as NavArrow } from "../../assets/icons/intro-navigate-arrow.svg";
import { Green, LightGray, Orange } from "../../colors";
import Upload from '../../assets/icons/upload.png';
import BadgeModule1 from '../../assets/badges/badge-module1.png';
import BadgeModule2 from '../../assets/badges/badge-module2.png';
import BadgeModule3 from '../../assets/badges/badge-module3.png';
import BadgeModule4 from '../../assets/badges/badge-module4.png';
import BadgeModule5 from '../../assets/badges/badge-module5.png';
import BadgeModule6 from '../../assets/badges/badge-module6.png';
import { Link } from "react-router-dom";
import { useLevelStore } from "../../position_store";

interface FileUploadStatus {
    files: File[];
    uploaded: boolean;
}

interface SubmissionProps { }

const Submissionlayout: React.FC<SubmissionProps> = () => {
    const [fileUploads, setFileUploads] = useState<FileUploadStatus[]>(() => {
        const savedUploads = localStorage.getItem("fileUploads");
        if (savedUploads) {
            try {
                const parsedUploads = JSON.parse(savedUploads);
                if (Array.isArray(parsedUploads)) {
                    return parsedUploads;
                }
            } catch (error) {
                console.error("Error parsing file uploads from localStorage:", error);
            }
        }
        return Array(6).fill({ files: [], uploaded: false });
    });
    
    const [popupStates, setPopupStates] = useState<boolean[]>(Array(6).fill(false));

    const completeModule = useLevelStore(state => state.completeModule);

    useEffect(() => {
        localStorage.setItem("fileUploads", JSON.stringify(fileUploads));
    }, [fileUploads]);

    const handleUpload = (index: number, files: FileList | null) => {
        if (!files) return;

        const updatedFileUploads = [...fileUploads];
        updatedFileUploads[index] = { files: Array.from(files), uploaded: true };
        setFileUploads(updatedFileUploads);
        handleOpenPopup(index);

        completeModule(modules[index]);

        const toString = (num: number) => num.toString();
        let stringPercent = toString(100 / modules.length * (index + 1));
        stringPercent = stringPercent.split(".")[0];
        localStorage.setItem("percentProgress", stringPercent);
        const event = new Event('storage');
        window.dispatchEvent(event);
    };

    const handleOpenPopup = (index: number) => {
        if (!fileUploads[index].uploaded) {
            const updatedPopupStates = [...popupStates];
            updatedPopupStates[index] = true;
            setPopupStates(updatedPopupStates);
        }
    };

    const handleClosePopup = (index: number) => {
        const updatedPopupStates = [...popupStates];
        updatedPopupStates[index] = false;
        setPopupStates(updatedPopupStates);
    };

    const modules = [
        "This is me",
        "Me and my circles",
        "The influence of perceptions",
        "Dilemmas",
        "Challenges and goal setting",
        "Value-based challenge creation"
    ];

    const badges = [
        BadgeModule1,
        BadgeModule2,
        BadgeModule3,
        BadgeModule4,
        BadgeModule5,
        BadgeModule6
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
                    <Title>
                        Submission Point
                        <TitleIconWrapper />
                    </Title>
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
                                                    <UploadButton style={{ display: ((fileUpload.uploaded || (index === 0 && !fileUpload.uploaded) || (fileUploads[index - 1]?.uploaded && !fileUpload.uploaded)) ? "block" : "none") }}>
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
                            {fileUpload.uploaded && popupStates[index] && (
                                <div>
                                    <Popup>
                                        <PopupContent>
                                            <h1>Module complete!</h1>
                                            <p>You've earned the "{modules[index]}" badge!</p>
                                            <img src={badges[index]} alt="Badge" />
                                            <p>Find out more about it in your badge collection.</p>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <Link to="/badges">
                                                                <ButtonBadgesBook>Go to collection book</ButtonBadgesBook>
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            <ButtonLater onClick={() => handleClosePopup(index)}>View later!</ButtonLater>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </PopupContent>
                                    </Popup>
                                </div>
                            )}
                        </SubmissionItem>
                    ))}
                </SubmissionContainer>
            </SubmissionBox>
        </>
    );
};

export default Submissionlayout;

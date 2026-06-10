"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Form from "../Layout/Form";

const PopupForm = () => {
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef(null);

    // Auto open after 10 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                setShowPopup(false);
            }
        };

        if (showPopup) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showPopup]);

    return (
        <>
            {showPopup && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div
                        ref={popupRef}
                        className="bg-white rounded-lg w-[90%] max-w-md relative"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setShowPopup(false)}
                            className="absolute top-2 right-3 text-xl"
                        >
                            ✖
                        </button>

                        <Form />
                    </div>
                </div>
            )}
        </>
    );
};

export default PopupForm;
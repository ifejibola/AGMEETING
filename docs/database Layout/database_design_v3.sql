--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- Started on 2022-04-08 22:07:37

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 16548)
-- Name: administrator; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.administrator (
    id integer NOT NULL,
    email character varying(100),
    password character varying(100)
);


ALTER TABLE public.administrator OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16547)
-- Name: administrator_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.administrator ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.administrator_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 216 (class 1259 OID 16576)
-- Name: item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item (
    id integer NOT NULL,
    meeting_id integer,
    issue_number integer,
    description character varying(2000),
    filepath character varying(300),
    votes_for integer,
    votes_against integer,
    abstain integer,
    file_name character varying NOT NULL
);


ALTER TABLE public.item OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16575)
-- Name: item_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.item ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.item_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 214 (class 1259 OID 16560)
-- Name: meeting; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.meeting (
    id integer NOT NULL,
    mod_id integer,
    admin_id integer
);


ALTER TABLE public.meeting OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16559)
-- Name: meeting_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.meeting ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.meeting_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 217 (class 1259 OID 16821)
-- Name: message; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.message (
    id integer NOT NULL,
    meeting_id integer,
    user_id integer NOT NULL,
    moderator_id integer NOT NULL,
    content character varying NOT NULL,
    "createdAt" date,
    "updatedAt" date
);


ALTER TABLE public.message OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16844)
-- Name: message_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.message ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.message_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 212 (class 1259 OID 16554)
-- Name: participant; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.participant (
    id integer NOT NULL,
    meeting_id integer,
    email character varying(100),
    password character varying(100),
    is_mod boolean,
    moderator_id integer,
    is_admin boolean DEFAULT false NOT NULL
);


ALTER TABLE public.participant OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16553)
-- Name: participant_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.participant ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.participant_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3343 (class 0 OID 16548)
-- Dependencies: 210
-- Data for Name: administrator; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.administrator (id, email, password) FROM stdin;
\.


--
-- TOC entry 3349 (class 0 OID 16576)
-- Dependencies: 216
-- Data for Name: item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.item (id, meeting_id, issue_number, description, filepath, votes_for, votes_against, abstain, file_name) FROM stdin;
3	1	\N	image/jpeg	C:\\Users\\Adam\\Documents\\COSC 499\\AGMEETING2\\AGMEETING\\server\\uploadedFiles\\1649441236946_unnamed (2).jpg	\N	\N	\N	unnamed (2).jpg
\.


--
-- TOC entry 3347 (class 0 OID 16560)
-- Dependencies: 214
-- Data for Name: meeting; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.meeting (id, mod_id, admin_id) FROM stdin;
\.


--
-- TOC entry 3350 (class 0 OID 16821)
-- Dependencies: 217
-- Data for Name: message; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.message (id, meeting_id, user_id, moderator_id, content, "createdAt", "updatedAt") FROM stdin;
91	\N	1	1	test	2022-04-08	2022-04-08
92	\N	1	1	test	2022-04-08	2022-04-08
93	\N	1	1	test	2022-04-08	2022-04-08
94	\N	1	1	test	2022-04-08	2022-04-08
95	\N	1	1	test	2022-04-08	2022-04-08
96	\N	1	1	test	2022-04-08	2022-04-08
97	\N	1	1	test	2022-04-08	2022-04-08
98	\N	1	1	trest	2022-04-08	2022-04-08
99	\N	3	1	test	2022-04-08	2022-04-08
\.


--
-- TOC entry 3345 (class 0 OID 16554)
-- Dependencies: 212
-- Data for Name: participant; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.participant (id, meeting_id, email, password, is_mod, moderator_id, is_admin) FROM stdin;
1	\N	test@test.com	$2b$10$T9OPUc4LmZH.sS4jRU/A7uvzaOPAHIi254Jr8JboWuQMgprf87KvG	t	1	f
3	\N	test2@test.com	$2b$10$9bCLsZq5Nk/Fn6Czu9NHEeoDulZyqj1QGqgLtqlnH1SAMoC/.KZ1i	f	1	f
\.


--
-- TOC entry 3357 (class 0 OID 0)
-- Dependencies: 209
-- Name: administrator_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.administrator_id_seq', 1, false);


--
-- TOC entry 3358 (class 0 OID 0)
-- Dependencies: 215
-- Name: item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.item_id_seq', 3, true);


--
-- TOC entry 3359 (class 0 OID 0)
-- Dependencies: 213
-- Name: meeting_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.meeting_id_seq', 1, false);


--
-- TOC entry 3360 (class 0 OID 0)
-- Dependencies: 218
-- Name: message_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.message_id_seq', 99, true);


--
-- TOC entry 3361 (class 0 OID 0)
-- Dependencies: 211
-- Name: participant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.participant_id_seq', 5, true);


--
-- TOC entry 3186 (class 2606 OID 16552)
-- Name: administrator administrator_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.administrator
    ADD CONSTRAINT administrator_pkey PRIMARY KEY (id);


--
-- TOC entry 3192 (class 2606 OID 16582)
-- Name: item item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id);


--
-- TOC entry 3190 (class 2606 OID 16564)
-- Name: meeting meeting_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meeting
    ADD CONSTRAINT meeting_pkey PRIMARY KEY (id);


--
-- TOC entry 3195 (class 2606 OID 16827)
-- Name: message message_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_pkey PRIMARY KEY (id);


--
-- TOC entry 3188 (class 2606 OID 16558)
-- Name: participant participant_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.participant
    ADD CONSTRAINT participant_pkey PRIMARY KEY (id);


--
-- TOC entry 3193 (class 1259 OID 16851)
-- Name: fki_message_user_id_fkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_message_user_id_fkey ON public.message USING btree (user_id);


--
-- TOC entry 3196 (class 2606 OID 16594)
-- Name: participant fk2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.participant
    ADD CONSTRAINT fk2 FOREIGN KEY (moderator_id) REFERENCES public.participant(id) NOT VALID;


--
-- TOC entry 3199 (class 2606 OID 16868)
-- Name: item item_meeting_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_meeting_id_fkey FOREIGN KEY (meeting_id) REFERENCES public.participant(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;


--
-- TOC entry 3198 (class 2606 OID 16570)
-- Name: meeting meeting_adminid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meeting
    ADD CONSTRAINT meeting_adminid_fkey FOREIGN KEY (admin_id) REFERENCES public.administrator(id);


--
-- TOC entry 3197 (class 2606 OID 16565)
-- Name: meeting meeting_modid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meeting
    ADD CONSTRAINT meeting_modid_fkey FOREIGN KEY (mod_id) REFERENCES public.participant(id);


--
-- TOC entry 3200 (class 2606 OID 16833)
-- Name: message message_meeting_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_meeting_id_fkey FOREIGN KEY (meeting_id) REFERENCES public.meeting(id) NOT VALID;


--
-- TOC entry 3201 (class 2606 OID 16838)
-- Name: message message_mod_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_mod_id_fkey FOREIGN KEY (moderator_id) REFERENCES public.participant(id) NOT VALID;


--
-- TOC entry 3202 (class 2606 OID 16846)
-- Name: message message_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.participant(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2022-04-08 22:07:37

--
-- PostgreSQL database dump complete
--


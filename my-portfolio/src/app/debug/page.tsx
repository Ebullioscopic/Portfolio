"use client";

import React from 'react';

// Test each import one by one
import { TextAnimate } from "@/components/magicui/text-animate";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { Meteors } from "@/components/magicui/meteors";
import { Particles } from "@/components/magicui/particles";
import { BorderBeam } from "@/components/magicui/border-beam";
import { MagicCard } from "@/components/magicui/magic-card";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { Terminal } from "@/components/magicui/terminal";
import { Confetti } from "@/components/magicui/confetti";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { Ripple } from "@/components/magicui/ripple";
import { Globe } from "@/components/magicui/globe";

export default function DebugPage() {
  return (
    <div className="p-8 space-y-4">
      <h1>Component Import Test</h1>
      
      <div>TextAnimate: {typeof TextAnimate !== "undefined" ? "✅" : "❌"}</div>
      <div>AnimatedShinyText: {typeof AnimatedShinyText !== "undefined" ? "✅" : "❌"}</div>
      <div>Meteors: {typeof Meteors !== "undefined" ? "✅" : "❌"}</div>
      <div>Particles: {typeof Particles !== "undefined" ? "✅" : "❌"}</div>
      <div>BorderBeam: {typeof BorderBeam !== "undefined" ? "✅" : "❌"}</div>
      <div>MagicCard: {typeof MagicCard !== "undefined" ? "✅" : "❌"}</div>
      <div>SparklesText: {typeof SparklesText !== "undefined" ? "✅" : "❌"}</div>
      <div>IconCloud: {typeof IconCloud !== "undefined" ? "✅" : "❌"}</div>
      <div>Terminal: {typeof Terminal !== "undefined" ? "✅" : "❌"}</div>
      <div>Confetti: {typeof Confetti !== "undefined" ? "✅" : "❌"}</div>
      <div>DotPattern: {typeof DotPattern !== "undefined" ? "✅" : "❌"}</div>
      <div>GridPattern: {typeof GridPattern !== "undefined" ? "✅" : "❌"}</div>
      <div>Ripple: {typeof Ripple !== "undefined" ? "✅" : "❌"}</div>
      <div>Globe: {typeof Globe !== "undefined" ? "✅" : "❌"}</div>
    </div>
  );
}

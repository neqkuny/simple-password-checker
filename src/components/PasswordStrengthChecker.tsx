import { useState, useMemo } from "react";
import { Eye, EyeOff, Check, X, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface StrengthCriteria {
  label: string;
  test: (password: string) => boolean;
}

const criteria: StrengthCriteria[] = [
  { label: "At least 8 characters", test: (pwd) => pwd.length >= 8 },
  { label: "Contains uppercase letter", test: (pwd) => /[A-Z]/.test(pwd) },
  { label: "Contains lowercase letter", test: (pwd) => /[a-z]/.test(pwd) },
  { label: "Contains number", test: (pwd) => /[0-9]/.test(pwd) },
  { label: "Contains special character", test: (pwd) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd) },
];

export const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const strengthData = useMemo(() => {
    if (!password) {
      return { level: "none", score: 0, color: "muted", label: "Enter a password" };
    }

    const passedCriteria = criteria.filter((c) => c.test(password)).length;
    const score = (passedCriteria / criteria.length) * 100;

    if (score < 40) {
      return { level: "weak", score, color: "weak", label: "Weak" };
    } else if (score < 80) {
      return { level: "medium", score, color: "medium", label: "Medium" };
    } else {
      return { level: "strong", score, color: "strong", label: "Strong" };
    }
  }, [password]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "var(--gradient-bg)" }}>
      <Card className="w-full max-w-md p-8 space-y-6 shadow-lg" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="flex items-center justify-center space-x-3 mb-2">
          <Shield className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Password Checker</h1>
        </div>
        <p className="text-muted-foreground text-center text-sm">
          Create a strong password to keep your account secure
        </p>

        <div className="space-y-4">
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-12 h-12 text-base"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-muted-foreground" />
              ) : (
                <Eye className="w-5 h-5 text-muted-foreground" />
              )}
            </Button>
          </div>

          {password && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Strength:</span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: `hsl(var(--${strengthData.color}))` }}
                >
                  {strengthData.label}
                </span>
              </div>

              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-500 ease-out rounded-full"
                  style={{
                    width: `${strengthData.score}%`,
                    backgroundColor: `hsl(var(--${strengthData.color}))`,
                  }}
                />
              </div>
            </div>
          )}

          <div className="space-y-2 pt-2">
            <p className="text-sm font-medium text-foreground mb-3">Password must contain:</p>
            {criteria.map((criterion, index) => {
              const isPassed = criterion.test(password);
              return (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-sm transition-all duration-200"
                >
                  {isPassed ? (
                    <Check className="w-4 h-4 text-strong flex-shrink-0" />
                  ) : (
                    <X className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  )}
                  <span
                    className={`transition-colors duration-200 ${
                      isPassed ? "text-foreground font-medium" : "text-muted-foreground"
                    }`}
                  >
                    {criterion.label}
                  </span>
                </div>
              );
            })}
          </div>

          {strengthData.level === "strong" && (
            <div className="mt-4 p-3 bg-strong/10 border border-strong/20 rounded-lg">
              <p className="text-sm text-strong font-medium text-center">
                ✓ Your password is strong and secure!
              </p>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            This tool works entirely in your browser. Your password is never sent or stored anywhere.
          </p>
        </div>
      </Card>
    </div>
  );
};

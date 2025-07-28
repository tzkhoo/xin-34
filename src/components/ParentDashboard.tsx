import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, EyeOff, Users, TrendingUp, Lock, ArrowRight, DollarSign, BarChart3, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

export const ParentDashboard = () => {
  const [visibilitySettings, setVisibilitySettings] = useState({
    portfolioValue: true,
    transactions: false,
    investments: true,
    performance: false
  });

  // Mock data for heirs
  const [heirs] = useState([
    {
      id: 1,
      name: "Alex Chen",
      portfolioValue: 85000,
      performance: "+8.4%",
      lastTransfer: "2024-01-15",
      transferAmount: 10000,
      riskScore: "Conservative"
    },
    {
      id: 2,
      name: "Emma Chen", 
      portfolioValue: 120000,
      performance: "+12.1%",
      lastTransfer: "2024-01-20",
      transferAmount: 15000,
      riskScore: "Moderate"
    },
    {
      id: 3,
      name: "David Chen",
      portfolioValue: 67000,
      performance: "+5.2%", 
      lastTransfer: "2024-01-10",
      transferAmount: 8000,
      riskScore: "Aggressive"
    }
  ]);

  const [transferData, setTransferData] = useState({
    heirId: "",
    amount: "",
    frequency: "monthly"
  });

  return (
    <div className="space-y-6 p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-parent mb-2">Parents Portal</h2>
      </div>

      {/* Interval Transfer Setup */}
      <Card className="border-parent/30 bg-parent/20 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-parent">
            <ArrowRight className="w-5 h-5" />
            Secure Inheritance Transfer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Set up regular transfers based on heir performance. Keep wealth within the BOCHK platform.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-parent">Select Heir</label>
              <Select value={transferData.heirId} onValueChange={(value) => setTransferData(prev => ({ ...prev, heirId: value }))}>
                <SelectTrigger className="border-parent/40">
                  <SelectValue placeholder="Choose heir" />
                </SelectTrigger>
                <SelectContent>
                  {heirs.map((heir) => (
                    <SelectItem key={heir.id} value={heir.id.toString()}>
                      {heir.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-parent">Transfer Amount</label>
              <Input
                placeholder="Enter amount"
                value={transferData.amount}
                onChange={(e) => setTransferData(prev => ({ ...prev, amount: e.target.value }))}
                className="border-parent/40"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-parent">Frequency</label>
              <Select value={transferData.frequency} onValueChange={(value) => setTransferData(prev => ({ ...prev, frequency: value }))}>
                <SelectTrigger className="border-parent/40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="annually">Annually</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <Button className="flex items-center gap-2 bg-parent hover:bg-parent/80">
              <DollarSign className="w-4 h-4" />
              Schedule Transfer
            </Button>
            <Button variant="outline" className="border-parent/40 text-parent hover:bg-parent/10">
              <Calendar className="w-4 h-4 mr-2" />
              View Transfer History
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Heir Investment Tracking */}
      <Card className="border-parent/30 bg-parent/20 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-parent">
            <BarChart3 className="w-5 h-5" />
            Heir Investment Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {heirs.map((heir) => (
              <div key={heir.id} className="p-4 rounded-lg bg-white/40 border border-parent/30">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-parent">{heir.name}</h4>
                    <p className="text-sm text-muted-foreground">Risk Profile: {heir.riskScore}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-parent">${heir.portfolioValue.toLocaleString()}</div>
                    <div className={`text-sm ${heir.performance.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {heir.performance} YTD
                    </div>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Last Transfer: ${heir.transferAmount.toLocaleString()}</span>
                  <span>{heir.lastTransfer}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Access Control Panel */}
      <Card className="border-parent/30 bg-parent/40 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-parent">
            <Shield className="w-5 h-5" />
            Generational Access Control
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground mb-4">
            Control what your heirs can see and modify. Ensure privacy while preparing for inheritance.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(visibilitySettings).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between p-3 rounded-lg bg-white/40 border border-parent/30 min-h-[60px]">
                <div className="flex items-center gap-2 flex-1">
                  {value ? <Eye className="w-4 h-4 text-parent flex-shrink-0" /> : <EyeOff className="w-4 h-4 text-muted-foreground flex-shrink-0" />}
                  <span className="text-sm font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                </div>
                <Switch
                  checked={value}
                  onCheckedChange={(checked) => 
                    setVisibilitySettings(prev => ({ ...prev, [key]: checked }))
                  }
                  className="flex-shrink-0"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Wealth Overview */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="border-parent/30 bg-parent/20 backdrop-blur-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Total Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-parent">$2.4M</div>
            <div className="text-xs text-green-400 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +12.3% YTD
            </div>
          </CardContent>
        </Card>

        <Card className="border-parent/30 bg-parent/20 backdrop-blur-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Protected Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-parent">$1.8M</div>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <Lock className="w-3 h-3" />
              75% of portfolio
            </div>
          </CardContent>
        </Card>

        <Card className="border-parent/30 bg-parent/20 backdrop-blur-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Authorized Viewers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-parent">3</div>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <Users className="w-3 h-3" />
              Active heirs
            </div>
          </CardContent>
        </Card>
      </div>


      {/* Quick Actions */}
      <Card className="border-parent/30 bg-parent/20 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-parent">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-3">
          <Button variant="outline" className="border-parent/40 text-parent hover:bg-parent/10">
            Modify Access Permissions
          </Button>
          <Button variant="outline" className="border-parent/40 text-parent hover:bg-parent/10">
            View Heir Activity
          </Button>
          <Button variant="outline" className="border-parent/40 text-parent hover:bg-parent/10">
            Estate Planning Tools
          </Button>
          <Button variant="outline" className="border-parent/40 text-parent hover:bg-parent/10">
            Generate Reports
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};